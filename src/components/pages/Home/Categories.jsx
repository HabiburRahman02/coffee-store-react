
const Categories = ({ categories }) => {

    return (
        <div className="my-8">
            <div role="tablist" className="tabs tabs-lifted">
                {
                    categories.map(category => <a role="tab" className="tab">Tab 3</a>)
                }

            </div>

        </div>
    );
};

export default Categories;