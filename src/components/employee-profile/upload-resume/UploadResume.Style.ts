import React, { CSSProperties } from "react";
import Theme from '../../../themes/Theme'

export interface StylesDictionary {
    [Key: string]: CSSProperties;
}
const Styles: StylesDictionary = {
    uploadResumeTitleDiv:{
        display:'flex',
        justifyContent:'space-between'
    },
    uploadResumeTitle:{
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '25px',
        color: Theme.Colors.types.black
    }
}

export default Styles