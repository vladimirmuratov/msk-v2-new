import {Accordion, AccordionDetails, AccordionSummary} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const BaseAccordionItem = ({id, question, answer}) => {

    return(
        <Accordion>
            <AccordionSummary
                sx={{
                    color: 'var(--black)',
                    fontWeight: 500,
                    fontSize: 18,
                    transition: 'all 0.3s',
                    '&:hover':{
                        color: 'var(--main-color)'
                    }
            }}
                expandIcon={<ExpandMoreIcon/>}
                aria-controls={`panel${id}-content`}
                id={`panel${id}-header`}
            >
                {question}
            </AccordionSummary>
            <AccordionDetails sx={{fontSize: 18, lineHeight: 1.5, backgroundColor: 'var(--main-color)', color: '#fff', whiteSpace: 'pre-wrap'}}>
                {answer}
            </AccordionDetails>
        </Accordion>
    )
}
