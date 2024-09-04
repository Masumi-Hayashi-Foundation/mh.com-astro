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

export default function NeaseChemicalData() {

    const classes = useStyles();
    
    return (
        <Typography variant='body1' className={classes.root}>
            <Typography variant='h3' color='primary'>EPA SUPERFUND SITE - NEASE CHEMICAL</Typography>

            <p>Salem, Ohi</p>
            <p>February 1992</p>
            
            <p className={classes.label}>History:</p>
            <p>The Nease Chemical Company operated this 44-acre site from 1944 to 1973, when it closed due to wastewater discharge violations. Nease manufactured a variety of chemical compounds including pesticides, fire-retardant, and chemical intermediates. Process wastes burned on-site and contaminants from unlined wastewater lagoons have migrated to surface water and ground water. This ground water is used locally as a drinking water supply. In 1977 a West German company bought Nease Chemical, and it became Rutgers Nease Company. The site was added to the National Priorities List in 1983. Between 1983 and 1986, Rutgers Nease Chemical had conducted investigations to define the site hydrogeological conditions.</p>

            <p className={classes.label}>Current Status:</p>
            <p>In 1986, Ohio EPA detected the presence of chemicals in the fish tissues that were associated with the manufacturing processes by Rutgers Nease. In April 1990 remedial investigation was initiated by collecting samples of ground water and surface water, air, soil fish and sediment to assess potential treats to public health and the environment.</p>

            <p className={classes.label}>Exposure Assessment:</p>
            <p>EPA imposed restrictions prohibiting the resale of soil on a few surrounding private properties on two counties because of soil contamination with mirex, an insecticide that was banned by the US EPA in 1978. Mirex has also contaminated the food chain, via the drinking water supply, the cows, cows' milk, the fish, and the residents/workers. In 1989, the Ohio Department of Heath issued a health advisory against swimming and fishing along certain portions of the Middle Fork Little Beaver Creek, affecting both Columbia and Salem Counties.</p>

            <p className={classes.label}>Source Information:</p>
            <p>The above information is from the following publications:
                <ul>
                    <li>(1) US EPA National Priorities List Sites: Ohio, Nease Chemical, pages 34-35, September 1990, EPA/540/4-90/035,</li>
                    <li>(2) "Hazardous - Plus Waste Site" by Phillip E. Canuto, Akron Beacon Journal, May 20, 1990,</li>
                    <li>(3) "Chemical-Laden Middle Fork a Place to Avoid", by Phillip E. Canuto, Akron Beacon Journal, May 20, 199?</li>
                </ul>
            </p>

            <p className={classes.lable}>February 2000 Update</p>

            <p className={classes.label}>Cleanup Progress:</p>
            <p>Nease Chemical closed the facility in 1975 pursuant to a Consent Order with OEPA to address its wastewater violations. During that time, Nease voluntarily drained the ponds, removed 115 buried drums and 5,700 cubic yards of soil from two highly contaminated areas onsite, and preliminarily assessed the nature and extent of contamination. Pursuant to the Administrative Order by Consent (AOC), effective February, 1988, Nease (now Ruetgers-Nease Corp.) is conducting a multi-phase Remedial Investigation/Feasibility Study (RI/FS) which is being overseen by USEPA and OEPA. The study has included: installation and seasonal monitoring of a 70-well groundwater and residential monitoring system; air monitoring, geophysical-cal studies, extensive onsite and offsite soil and sludge sampling, pond and MFLBC tributary sediment sampling. Additional phases included in-depth studies of mirex and related compounds in fish, sediments, water and floodplain soils along the 30-mile stretch, investigation of habitats and endangered species along the MFLBC ecological corridor, and hydrogeologic investigation of Dense Non-Aqueous Phase Liquids (DNAPL) in groundwater. To abate the immediate threat to human health and the environment posed by surface water runoff and sediment migration (a major transport mechanism of mirex), a removal AOC was effected November, 1993, whereby Nease installed a leachate collection and on-site treatment system, numerous sediment barriers and surface water diversion structures. Sediment studies have confirmed the effectiveness of these removal actions until they are integrated into a site-wide final remedial solution. Current status-removal system remains in operation. Remedial Investigation/Risk Assessment is in progress. Record of Decision (ROD) scheduled in second quarter of FY 2000.</p>

            <p className={classes.label}>Information Source:</p>
            <p>The above information is from the following on-line publications:
            US EPA Region 5 NPL Fact Sheet, Ohio EPA ID# OHD980610018, May 1999,
            www.epa.gov/region5superfund/npl/ohio/OHD980610018.htm </p>


            <p className={classes.label}>October 2004 Update</p>

            <p>This site is still in process of remediation and clean-up.
            Please read the update link regarding the Nease Chemical on-going stages of remediation and clean-up in the linked NPL Fact Sheet. This is listed in the U.S. EPA region , Superfund Division, District 5, Jan. 2004. </p>

            <p>NPL Fact Sheet, January 2004, Nease Chemical, Salem, Ohio.
            http://www.epa.gov/R5Super/npl/ohio/OHD980609994.htm </p>
                        
        </Typography>
    );
}