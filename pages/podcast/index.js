import 'isomorphic-fetch'
import {Link} from '../../routes'
import Head from 'next/head'
import Error from 'next/error'
import slug from '../../helpers/slug'

export default class extends React.Component{

    static async getInitialProps({res}){
        try{
            let req = await fetch('https://api.audioboom.com/channels/recommended')
            let { body: channels } = await req.json()
            return { channels , statusCode: 200 }
        } catch(e) {
            res.statusCode = 503
            return { channels: null, statusCode: 503}
        }
    }

    render(){
        const { channels, statusCode } = this.props

        if(statusCode != 200){
            return <Error statusCode= {statusCode} />
        }
        return (
            <div>
                <Head>
                    <title>Podcasts</title>
                </Head>
                <header>Podcasts</header>
                
                <div className="channels"> 
                    { 
                        channels.map((channel) => (
                            <Link 
                                route='podcast/channel' 
                                params={{
                                    slug: slug(channel.title),
                                    id: channel.id
                                }}
                                prefetch
                            >
                                <a className="channel">
                                    <img src={channel.urls.logo_image.original} alt=""/>
                                    <h2>{ channel.title }</h2>
                                </a>
                            </Link>
                        )) 
                    }
                </div>

                <style jsx>{`
                    header {
                        color: #FDF924;
                        background: #821785;
                        padding: 15px;
                        text-align: center;
                        font-weight: 600;
                    }
                    .channels{
                        display: grid;
                        grid-gap: 15px;
                        padding: 15px;
                        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr))
                    }
                    .channel {
                        display: block;
                        border-radius: 3px;
                        box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                        margin-bottom: 0.5em;
                    }
                    .channel img{
                        width: 100%;
                    }
                    h2 {
                        padding: 5px;
                        font-size: 0.9em;
                        font-weight: 600;
                        margin: 0;
                        text-align: center;
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