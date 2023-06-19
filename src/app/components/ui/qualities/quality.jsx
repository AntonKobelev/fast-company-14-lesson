import React from "react";
import PropTypes from "prop-types";
import { useQuality } from "../../../hooks/useQuality";

const Quality = ({ id }) => {
    console.log(id);
    const { isLoading, getQuality } = useQuality();
    const qual = getQuality(id);
    if (!isLoading && qual) {
        return (
            <span className={"badge m-1 bg-" + qual.color}>{qual.name} </span>
        );
    } else return "loading...";
};

Quality.propTypes = {
    id: PropTypes.string
};

export default Quality;

// import React from "react";
// import PropTypes from "prop-types";
// const Quality = ({ color, name, _id }) => {
//     return (
//         <span className={"badge m-1 bg-" + color}>
//             {name}
//         </span>
//     );
// };
// Quality.propTypes = {
//     color: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     _id: PropTypes.string.isRequired
// };

// export default Quality;
