class Category extends React.Component {
    render() {
        return (
            <div className="category">
                <h2 className="categoryTitle">{this.props.title}</h2>
                <div className="contents">
                    { this.props.children }
                </div>
            </div>
        )
    }
}

window.Category = Category