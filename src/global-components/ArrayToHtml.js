import React from 'react';

class ArrayToHtml extends React.Component {
    // props: tag(str), atts(arr of obj),
    
    render() {
        // console.log('ArrayToHtml:');
        // console.log(this.props.content);
        const TagName = this.props.tag;
        // console.log({TagName});
        const mappedArr = this.props.content.map((item, idx) => {
            return (
                <TagName key={idx} {...item.atts} >
                    {item.title}
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
