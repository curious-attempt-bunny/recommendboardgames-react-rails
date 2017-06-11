class Category extends React.Component {
    render() {
        return (
            <div className="category">
                <h2 className="categoryTitle">Todo</h2>
                <div>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

window.Category = Category