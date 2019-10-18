import React from 'react';
import { Link } from 'react-router-dom';


const AboutMe = () => (
    <>
        <h1>Om mig</h1>
            <p>
                Andreas heter jag, född och uppväxt i Göteborg.
            </p>

        <h2>Rapporter</h2>
        <Link to="reports/week/1">
            Vecka 1
        </Link>
        <br />
        <Link to="reports/week/2">
            Vecka 2
        </Link>

        <h2>Formulär</h2>
        <Link to="form">Länk till formulär</Link>
    </>
);

export default AboutMe;
