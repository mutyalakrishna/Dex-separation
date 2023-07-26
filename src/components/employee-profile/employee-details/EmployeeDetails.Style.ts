import React, { CSSProperties } from "react";
import Theme from '../../../themes/Theme'

export interface StylesDictionary {
    [Key: string]: CSSProperties;
}
const Styles: StylesDictionary = {
    welcomeText: {
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '29px',
        color: Theme.Colors.types.black
    },
    employeeName: {
        color: Theme.Colors.types.blue
    },
    employeeDesignation: {
        fontWeight: 500,
        fontSize: '15px',
        color: Theme.Colors.types.black
    },
    StepsDiv:{
        marginTop: '3%',
        width: '50%',
        position: 'relative',
        left: '25%'
    }
}

export default Styles