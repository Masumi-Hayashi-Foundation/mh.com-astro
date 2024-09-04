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
        
    }
}));

export default function SummitNationalData() {

    const classes = useStyles();
    
    return (
        <Typography variant='body1' className={classes.root}>
            <Typography variant='h3' color='primary'>EPA SUPERFUND SITE - SUMMIT NATIONAL</Typography>

            <p>June 1991</p>
            <p>Deerfield, Ohio</p>

            <p className={classes.label}>History:</p>
            <p>This 11.5 acre Summit National Liquid Disposal Services dump site is a former coal strip mine containing a coal wash pond and a coal stockpile. From 1972 to 1978, the site was used as a waste disposal facility and received such wastes as oils, resins, paint, and metal plating sludges, flammable solvents, and chlorinated solvents. Two surface water ponds and an incinerator were located on the site. Some wastes were incinerated, others were buried, and some were dumped on the soil. In 1978, Ohio EPA ordered Summit National to cease receiving wastes and to remove all wastes from the site. Instead, the facility closed, leaving 16,000 drums and 300,000 gallons of waste on site, as well as contaminated soils, ground water, and surface water. There are several agricultural fields located within a few thousand feet of the site. Berlin Lake Reservoir is located about one mile southeast of the site. The site was placed on the National Priorities List in 1983.</p>

            <p className={classes.label}>Current Status:</p>
            <p>The investigation found contamination on-site of the ground water, soil, and pond sediments and surface water. In 1990, the estimate for cleanup fluctuated between $34 million and $25 million. The revised $25 million plan calls for only the surface soil to be incinerated. The aquifer will not be cleaned up (cleanup would take 30 years). Instead, a gravel-lined ditch will be used to collect water from the aquifer.</p>

            <p className={classes.label}>Exposure Assessment:</p>
            <p>In 1984, US EPA found concentrations of PCBs on and off the site, as well as runoffs containing benzene and polychlorinated biphenyls. Officials are concerned that the dump has contaminated the ground water and can affect the 209 wells within three miles of the site. The Berlin Lake Reservoir is a standby water supply for the City of Youngstown. The reservoir is threatened because a contaminated waste lagoon overflowed into the tributary of the reservoir.</p>

            <p className={classes.label}>Source Information:</p>
            
            <ul>
                <li>(1) US EPA National Priorities List Site: Ohio, Sept. 1990, Summit National Liquid Disposal Services, pages 56-57, EPA/540/4-90/035, </li>
                <li>(2) "Action at Dump Ordered", Jim Carney, The Beacon Journal, April 10, 1987,</li>
                <li>(3) "$400,000 Toxic Pond Cleanup at Deerfield Nearly Completed," Jim Carney, The Beacon Journal, May 8, 1987,</li>
                <li>(4) "Group Likes Pact for Cleanup," Bob Downing, The Beacon Journal, July 3, 1990,</li>
                <li>(5) "Hearing Aug. 1 on Deerfield Cleanup," Bob Dowling, The Beacon Journal, July 24,1990,</li>
                <li>(6) "More than 100 Crowd Hall to Hear US Plan to Cleanup Deerfield Dump," The Beacon Journal, Aug. 2, 1990.</li>
            </ul>

            <p className={classes.label}>February 2000 Update</p>
            
            <p className={classes.label}>Cleanup Progress:</p>
            <p>In 1980, USEPA, Ohio Environmental Protection Agency (OEPA) and the potentially responsible parties (PRPs) removed drums, tanks and a small amount of soil from the site. In 1987, USEPA removed liquids and strengthened dikes to prevent contaminants from overflowing the ponds and flowing to the Berlin Reservoir. A Consent Decree (CD) between USEPA, OEPA, and the PRPs was entered on June 11, 1991. The PRPs completed a design and then took the following actions at the direction of the agencies. In 1994, the PRPs dredged contaminants from the adjacent drainage ditches. In 1995, the PRPs excavated and incinerated 21,000 tons of contaminated soil and sediments, excavated and took off-site for disposal 484 drums and constructed a collection trench and a treatment plant for the groundwater. About 25 million gallons of contaminated water have been treated. Over the past few years contaminant levels have steadily declined at the site. Based on these findings, the PRPs have requested and submitted a proposal for natural attenuation and the agency is currently reviewing the proposal.</p>

            <p className={classes.label}>Information Source:</p>
            <p>The above information is from the following on-line publications:</p>
            <p>US EPA Region 5 NPL Fact Sheet, OHIO EPA ID# OHD980609994 May 1999, <a href='http://www.epa.gov/region5superfund/npl/ohio/OHD980609994.htm'>http://www.epa.gov/region5superfund/npl/ohio/OHD980609994.htm</a></p>


            <p>October 2004 Update</p>

            <p>In 1995, the potentially responsible parties excavated and incinerated 21,000 tons of contaminated soils and sediments, excavated and took offsite for disposal 484 drums, and constructed a collection trench and a treatment plant for the groundwater. About 25 million gallons of contaminated water have been treated. However, the site still does not met EPA's standards and remains on the NPL. Please read the update NPL Fact Sheet linked below. This is listed in the U.S. EPA region , Superfund Division, District 5, Jan. 2004.</p>

            <p>NPL Fact Sheet, January 2004, EPA Superfund Site, Summit County, Ohio, <a href='http://www.epa.gov/R5Super/npl/ohio/OHD980609994.htm'>http://www.epa.gov/R5Super/npl/ohio/OHD980609994.htm</a></p>
            
        </Typography>
    );
}