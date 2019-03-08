import Link from 'next/link'

export default class extends React.Component{

    static async getInitialProps({query}){
        try{
            let idChannel = query.id

            // Request en paralelo
            let [reqChannel, reqAudios, reqSeries] = await Promise.all([
                fetch('https://api.audioboom.com/channels/'+idChannel),
                fetch('https://api.audioboom.com/channels/'+idChannel+'/audio_clips'),
                fetch('https://api.audioboom.com/channels/'+idChannel+'/child_channels')
            ])

            let { body: {channel} } = await reqChannel.json()

            let { body: {audio_clips} } = await reqAudios.json()

            let { body: { channels:series} } = await reqSeries.json()

            return { channel, audio_clips, series, statusCode: 200}
        } catch(e) {
            res.statusCode = 503
            return { channel: null, audio_clips: null, series: null, statusCode: 503}
        }
    }

    render(){
        const {channel, audio_clips, series, statusCode} = this.props

        if(statusCode != 200){
            return <Error statusCode= {statusCode} />
        }

        return(
            <div>
                <header><Link href="/podcast"><a>Podcasts</a></Link></header>
                <img className="foto_portada" src={channel.urls.banner_image.original} />

                <h1>{channel.title}</h1>
                
                <h2>Audios</h2>
                <div className="audios">    
                    {
                        audio_clips.map( clip => (
                            <div className="audio">
                                <img src={clip.urls.post_image.original} alt=""/>
                                <h2>{ clip.title }</h2>
                            </div>
                        ))
                    }
                </div>
                
                {
                    series.length > 0 &&
                    <div>
                        <h2>Series</h2>
                        <div className="series">
                            {
                                series.map( serie => (
                                    <div className="serie">
                                        <img src={serie.urls.logo_image.original} alt=""/>
                                        <h2>{ serie.title }</h2>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                }
                <style jsx>{`
                    header {
                        color: #FDF924;
                        background: #821785;
                        padding: 15px;
                        text-align: center;
                        font-weight: 600;
                    }
                    .foto_portada {
                        width: 100%;
                    }
                    .audios, .series {
                        display: grid;
                        grid-gap: 15px;
                        padding: 15px;
                        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr))
                    }
                    .audio, .serie {
                        display: block;
                        border-radius: 3px;
                        box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                        margin-bottom: 0.5em;
                    }
                    .audio img, .series img{
                        width: 100%;
                    }
                    h2 {
                        padding: 5px;
                        font-size: 0.9em;
                        font-weight: 600;
                        margin: 0;
                        text-align: center;
                    }
                    a {
                        text-decoration: none;
                        color: white;
                    }
                `}
                </style>

                <style jsx global>{`
                    body {
                        margin: 0;
                        font-family: system-ui;
                        background: white;
                    }
                `}
                </style>
            </div>
        )
    }
}