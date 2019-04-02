/**
 * 
 */

class index_AreaPrincipalDashboard extends React.Component {
    render(){
        return (
            <div className="AreaPrincipalDashboard">
                { 
                    this.props.children
                }
                <style jsx>{`
                    .AreaPrincipalDashboard {
                        float: left;
                        width: calc(100% - 178px);
                    }    
                `}</style>
            </div>
        )
    }
}
export default index_AreaPrincipalDashboard