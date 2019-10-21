import React from 'react';

class ArrayToHtml extends React.Component {
    // props: tag(str), atts(arr of obj), array(array)
    
    render() {
        console.log(`arraytoHTML: ${this.props.array}`);
        const TagName = this.props.tag;
        console.log({TagName});
        const mappedArr = this.props.array.map((item, idx) => {
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

export default ArrayToHtml;
