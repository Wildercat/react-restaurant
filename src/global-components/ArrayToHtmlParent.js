import React from 'react';

class ArrayToHtmlParent extends React.Component {
    // props: tag(str), atts(arr of obj), array(array)
    
    render() {
        console.log(`arrayToHtmlParent: ${this.props.children}`);
        const TagName = this.props.tag;
        console.log({TagName});
        const mappedArr = this.props.children.map((item, idx) => {
            return (
                <TagName key={idx} {...this.props.atts[idx]}>
                    {item}
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
