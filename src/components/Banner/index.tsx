import moment from "moment";
import { useRef, useState } from "react";

const Banner = () => {
    var now = moment();
    console.log({now});
    return <>
        <img src="next.svg"/>
    </>
}
export default Banner;