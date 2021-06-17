import React, { useState } from 'react'
import { Button } from 'reactstrap'
import WriteMedia from './blog_thing'
import WriteTeam from './WriteTeam'

export default function CmsMain(props) {

    const [display, setDisplay] = useState(null)

    console.log("display:",display);
    return (
        <div className="d-flex align-items-center justify-content-center w-100" style={{gap:"2%"}}>
            {!display&&(<><Button onClick={()=>{setDisplay(<WriteMedia {...props} setDisplay={setDisplay}/>)}}>Media</Button>
            <Button onClick={()=>{setDisplay(<WriteTeam {...props} setDisplay={setDisplay}/>)}}>Team</Button></>)}
            {display&&display}
        </div>
    )
}

