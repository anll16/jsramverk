import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import ReadMeFile from './README.md';

const Week1 = () => {
    const [readMe, setReadMe] = useState(undefined);

    useEffect(() => {
        fetch(ReadMeFile).then(res => res.text()).then(text => setReadMe(text));

    }, []);

    return (
        <>
       <h3>Länk till github</h3>
            <a href="https://github.com/anll16/jsramverk" target="_blank" rel="noopener noreferrer">@anll16/jsramverk</a>
        <ReactMarkdown source={readMe} />
        </>
    );
};


export default Week1;
