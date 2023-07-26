import React, { CSSProperties } from "react";
import Theme from '../../themes/Theme'

export interface StylesDictionary {
    [Key: string]: CSSProperties;
}
const Styles: StylesDictionary = {
    layoutStyle: {
        minHeight: '100vh'
    },
    titleStyle: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '18px',
        marginTop: '30px'
    },
    titleLogo: {
        display: "flex",
        justifyContent: 'center',
        marginTop: '14px'
    },
    headerDiv: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    unauthroziedDiv: {
        margin: 'auto',
        width: '50%',
        border: '2px solid green',
        padding: '10px'
    },
    contentStyle:{
        textAlign: 'center',
        minHeight: 120,
        lineHeight: '120px',
        // color: Theme.Colors.types.white,
    }
}

export default Styles