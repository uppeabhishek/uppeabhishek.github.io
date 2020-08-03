import React, { FunctionComponent } from "react";
import { Loader } from "../loader";

const Contact: FunctionComponent = () => (
    <iframe
        frameBorder="0"
        src="https://docs.google.com/forms/d/e/1FAIpQLSe_Ho8OT1j6QwcWrf-xd8uF2AwPFkW0VCuMPgRkjMd1jM5F8Q/viewform?embedded=true"
        style={{
            width: "100%",
            height: "100%"
        }}
        title="contactInfo"
    >
        <Loader />
    </iframe>
);

export default Contact;
