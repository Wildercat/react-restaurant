import React from 'react';

class ArrayToHtmlParent extends React.Component {
    // props: tag(str), atts(arr of obj),
    
    render() {
        console.log(`arraytoHTML: ${this.props.array}`);
        const TagName = this.props.tag;
        console.log({TagName});
        const mappedArr = this.props.atts.map((item, idx) => {
            return (
                <TagName key={idx} {...this.props.atts[idx]}>
                    {this.props.children[idx]}
                </TagName>
            );
        });
        return (
            <>
                {mappedArr}
            </>
        );
    }
}

export default ArrayToHtmlParent;
