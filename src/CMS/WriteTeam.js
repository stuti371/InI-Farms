import React from 'react'
import Button from 'reactstrap/lib/Button'
import BoardPeople from './BoardPeople'
import ManagementPeople from './ManagementPeople'

export default function WriteTeam(props) {
    return (
        <div className="w-100">
            <Button onClick={()=>{props.setDisplay(null)}}>Go back</Button>
            <BoardPeople/>
            <ManagementPeople/>
        </div>
    )
}
