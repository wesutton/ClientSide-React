import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import SendIcon from '@material-ui/icons/Send';





const useStyles = makeStyles({
    container: {
        
        
    }
})

export default function AddAgenda() {
    const classes = useStyles()
    const [date, setDate] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [priority, setPriority] = useState('')
    const [item, setItem] = useState('')

    const handleSubmit = (e) => {
        e.reventDefault()

        if (date && start && end && priority && item) {
            console.log(date, start, end, priority, item)
        }
    }

    return (
        <Container className="page">

            <h1 className="title">Add Agenda Items</h1>

            <form className="Form" noValidate autoComplete="off" onSubmit={ handleSubmit }>
                <TextField className={classes.field}
                    onChange={(e) => setDate(e.target.value)}
                    style={{ margin: 15 }}
                    variant="filled"
                    type="Date"
                    label="Date"
                    
                />
            
            <div>
                <TextField className={classes.field}
                    onChange={(e) => setStart(e.target.value)}
                    style={{ margin: 8 }}
                    variant="filled"
                    type="time"
                    label="Start Time"
                />
                <TextField className={classes.field}
                    onChange={(e) => setEnd(e.target.value)}
                    style={{ margin: 8 }}
                    variant="filled"
                    type="time"
                    label="End Time"
                />
                <TextField className={classes.field}
                    onChange={(e) => setPriority(e.target.value)}
                    style={{ margin: 8 }}
                    variant="filled"
                    type="text"
                    label="Priority"
                />
            </div>

            <div>
                <TextField className={classes.field}
                    onChange={(e) => setItem(e.target.value)}
                    style={{ margin: 8 }}
                    id="outlined-full-width-multiline-static"
                    variant="filled"
                    multiline
                    rows={4}
                    type="text"
                    label="Agenda Item"
                    fullWidth
                />
            </div>
            <div>
                <Button 
                    onClick={() => console.log ('Submitted')}
                    type="submit"
                    variant="contained"
                    color="primary"
                    endIcon={< SendIcon />}
                    >
                        Submit
                </Button>
            </div>
        </form>
           
    </Container>

    )
}

