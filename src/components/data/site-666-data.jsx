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

export default function Site666Data() {

    const classes = useStyles();
    
    return (
        <Typography variant='body1' className={classes.root}>
            <Typography variant='h3' color='primary'>EPA SUPERFUND SITE - NEASE CHEMICAL</Typography>

            <p>Elyria, Ohio</p>
            <p>July 1999</p>
            
            <p className={classes.label}>History:</p>
            <p>The Republic Steel Quarry site was once a sandstone quarry in southwest Elyria, Ohio. It is located next to a steel plant formerly owned by Republic Steel, who merged in 1984 with LTV Steel Company. This five-acre sandstone quarry was used as a pickle liquor (sulfuric and hydrochloric acids used in steel-cleaning processes) disposal site from 1950 to 1969. Approximately 200,000 gallons of acids were disposed annually at the site. The Republic Steel Quarry is located adjacent to a minor aquifer that discharges to the west bank of the Black River. In 1977 Republic Steel sold the quarry and surrounding wooded property to the city of Elyria. The City originally intended to develop the site as a park. These plans were canceled in December 1984.</p>

            <p className={classes.label}>Current Status:</p>
            <p>In 1986, the Republic Steel Quarry was placed on the National Priorities List as Site number 666 in the EPA's Superfund list of 888 hazardous waste dumps. In 1988, US EPA completed a Superfund financed remedial investigation for this site. Sediments in the quarry were found to be contaminated but not migrating from the site. In Sept. 1988, the record of decision was signed. The proposed cleanup remedy included removal of the contaminated soil adjacent to the quarry, additional fish tissue testing, and site reassessment every five years. Fish samples were collected for analysis during the summer of 1989. Soil removal was projected to begin in early 1990.</p>

            <p>The Level II Five-Year Review was completed June 26, 1998, and indicated that no unacceptable risks from chemical contaminants exist at the site under current use (casual trespassing) conditions, however regular use of the quarry via swimming or fish consumption would present unacceptable risks. Chemical and physical hazards currently at the site will be addressed via fencing improvements and enhanced site security. The review also recommended continued periodic monitoring of quarry surface water, quarry fish tissue and groundwater. Because anticipated future land use is non-residential, no unacceptable future risks from contaminants are expected. U.S. EPA is pursuing the adoption of codified land use restrictions for the City of Elyria in conjunction with the upcoming deletion activities in 1999. As the only remaining Responsible Party (RP), the City of Elyria settled with U.S. EPA for $25,000 in 1996. The estimated worth cost for remedial action is $63,200.5</p>

            <p className={classes.label}>Source Information:</p>
            <p>(1) "Elyria Pond, Bass and All, May Be a Pit of Poisons", Ted Wendling, The Plain Dealer, May 17, 1987, (2) "Elyria Gives Blank Check to EPA Cleanup", Ted Wendling, The Plain Dealer, May 19, 1987, (3) US EPA Superfund Program Fact Sheet, Republic Steel Quarry Site, Elyria, Ohio Feb. 1987, (4) EPA National Priorities List Sites: Ohio, Sept. 1990, EPA/540/4-90/035.</p>



            <p className={classes.label}>February 2000 Update</p>

            <p className={classes.label}>Cleanup Progress:</p>
            <p>IUSEPA conducted a streamlined remedy selection and removal action. In 1988, a Record of Decision (ROD) was signed which led to the excavation and removal of 190 cubic yards of combined sediment and soils from the drainage ditch and hot spots around the edge of the quarry; further groundwater monitoring to determine potential threat; and a fish and biota study to determine potential threat. The contaminated quarry sediments were to be left in place because these contaminants lay below the mixing zone and fish are not likely to come in contact with the contaminants. USEPA concluded that remediation would likely entrain contaminated sediments in the water, thereby increasing the likelihood of exposure to contaminants by fish. The studies confirmed that no unacceptable risks were present at the time, however, during the time period between the baseline risk assessment and a post-ROD risk assessment, some contaminants were reassigned higher cancer potency factors by USEPA, thereby increasing the carcinogenic risk. The Preliminary Close Out Report was issued on December 31, 1992. USEPA determined it would be more prudent to conduct a detailed Five-Year Remedy Assessment prior to site deletion. The Level II Five-Year Review was completed June 26, 1998, and indicated that no unacceptable risks from chemical contaminants exist at the site under current use (casual trespassing) conditions, however regular use of the quarry via swimming or fish consumption would present unacceptable risks. Chemical and physical hazards currently at the site will be addressed via fencing improvements and enhanced site security. The Review also recommended continued periodic monitoring of quarry surface water, quarry fish tissue and groundwater. Because anticipated future land use is non-residential, no unacceptable future risks from contaminants are expected. USEPA is pursuing the adoption of codified land use restrictions for the City of Elyria in conjunction with the upcoming deletion activities in 1999. As the only remaining Responsible Party (RP), the city of Elyria settled with USEPA for $25,000 in 1996.</p>

            <p className={classes.label}>Information Source:</p>
            <p>The above information is from the following on-line publications:</p>
            <p>US EPA Region 5 NPL Fact Sheet, OHIO EPA ID# OHD980903447, May 1999, www.epa.gov/region5superfund/npl/ohio/OHD980903447.htm</p>

            <p className={classes.label}>October 2004 Update</p>

            <p>EPA Superfund Site, Republic Steel (Site 666) was removed from the Natiional Priorites List in December 2002. The City of Elyria has cooperated with the U.S. EPA's request to incorporate specific and enforceable land use restrictions for the site into the city's code as of October 2001. Please read the update links regarding the Republic Steel Quarry remediation and clean-up in the linked NPL Fact Sheet and the EPA News releases. This is listed in the U.S. EPA region , Superfund Division, District 5, Jan. 2004.</p>

            <p>NPL Fact Sheet, January 2004, Republic Steel Quary, Elyria, Ohio http://www.epa.gov/R5Super/npl/ohio/OHD980903447.htm</p>

            </Typography>
    );
}