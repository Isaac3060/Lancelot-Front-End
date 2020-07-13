import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import RenderBarChart from "../component/RenderBarChart";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Barchart = () => {
    const { store, actions } = useContext(Context);
    return(
        <div>
        <Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
			<div className="col-6 mx-auto">
				<RenderBarChart />
			</div>
        </div>
        ),
    },