import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
        padding: '4rem 1rem 1rem 0rem',
        
        maxWidth: '40rem',
        "& p": {
            marginTop: ".5rem",
            
        },  
        "& li": {
            marginLeft: '1.5rem',
        },
    },
    label: {
        fontWeight: 800,
        color: theme.palette.primary.main,
        marginTop: '1rem',
        display: 'inline-block' 
    }
}));

export default function SummitNationalData() {

    const classes = useStyles();
    
    return (
        <Typography variant='body1' className={classes.root}>
            <Typography variant='h3' color='primary'>EPA SUPERFUND SITE - WRIGHT-PATTERSON AIR FORCE BASE</Typography>

                <p>Dayton, Ohio</p>
                <p>February 2000</p>
                
                <p className={classes.label}>Cleanup Progress:</p>
                <p>The 65 individual source areas have been grouped into eleven source control and one basewide groundwater cleanup projects. In 1995, US EPA, the Air Force, and Ohio EPA signed a concensus statement for streamlining the investigation and the study process at WPAFB. Under this statement, areas of the base needing action are addressed as early actions (ie., removal actions) with the Air Force as the lead agnecy, and sites not needing action are separated out as early as possible for no action decisions. there have been several past removal actions including drum and tank removals, free product recovery systems, and groundwater treatment by air stripping for perchloreothene and trichloroethene.</p>

                <p>In 1993 and 1994, two Records of Decisions (RODs) were signed consisting of landfill capping, leachate collection and treatment, gas collections and treatment, public water supply, and institutional controls (1993); and a no action decision for some off-source areas (1994). The 1993 ROD clenaup action is complete except for the final disclosure report. In 1996, a ROD selecting a no action was signed for 21 sub-areas within the source control cleanup projects. In 1997, a ROD for natural attenuation of a fuel spill area in Operable Unit 2 (OU2) was signed. Under the streamlining process, two early actions are complete (landfill caps in 1996 and 1997).</p>

                <p>Under the streamlining process, one early action is the final stage of constructioun (excavation of a chemical disposal site), and early actions have begun at four Ous (three landfill cover projects and one french drain system). These actions are all scheduled to be completed in 1998. A ROD for "No Further Action", other than monitoring and institutional controls, covering all fo the source control areas is planned for 1998. A final ROD for the groundwater project is scheduled for 1999. This will constitute construction completion for the site.</p>

                <p className={classes.label}>Sources:</p>
                <p>US EPA, Region 5, Wright-Patterson Air Force Base, NPL Fact Sheet, Ohio EPA ID# OH7571724312, July 1998, <a href='http://www.epa.gov/R5Super/npl/mich/OH7571724312.htm'>http://www.epa.gov/R5Super/npl/mich/OH7571724312.htm</a></p> 
            </Typography>
    );
}