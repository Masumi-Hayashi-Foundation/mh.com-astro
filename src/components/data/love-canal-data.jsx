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

export default function LoveCanalData() {

    const classes = useStyles();
    
    return (
        <Typography variant='body1' className={classes.root}>
            <Typography variant='h3' color='primary'>EPA SUPERFUND SITE - LOVE CANAL</Typography>

            <p>Niagara Falls, New York</p>
            <p>June 1991</p>
            
            <p className={classes.label}>History:</p>
            <p>Love Canal was the first Superfund site designated in the US.  This landmark site was placed on the National Priorities List in 1980 when President Carter signed the Superfund legislation creating a $1.6 billion federal fund.</p>

            <p>In the late 1890’s William T. Love created Love Canal as a cheap source of hydroelectric power for a utopian industrial society.  From 1942 to 1953, Hooker Electrochemical Company deposited at least 21,800 tons of production process wastes that include pesticides, plasticizers, chlorinated hydrocarbon residues, process sludges, fly ash, and municipal wastes.  Niagara Falls Board of Education purchased the property. From 1954 to 1975 they built approximately 100 homes and an elementary school.
            In the mid-1970’s, complaints from the Love Canal’s Home Owners Association, lead by housewife Lois Gibbs, resulted in studies of basement air contamination, groundwater pollution, sump water contamination, and cancer risk assessment. </p>

            <p>In 1978 N.Y. Commissioner of Health Robert D. Whalen, M.D. declared a health emergency at Love Canal.  He recommended relocation of pregnant women and children under the age of two residing in homes adjacent to the landfill.  President Carter also issued a declaration of emergency making Federal Disaster assistance available.  In the same year the elementary school was closed down.  The state purchased homes along 97th and 99th Streets at 1978 “pre-disaster” fair market value relocating over 230 families.</p>

            <p className={classes.label}>Current Status:</p>
            <p>On September 27, 1988, Dr. David Axelrod, Commissioner of the N.Y. State Department of Health, issued his “Decision of Habitability” for the Canal.  A technical Review Committee defined “habitable” as “Suitable for normal/residential use without any restrictions”, which meant that individuals could not only live in the Canal area but feel comfortable about raising their families, with children living and playing in the area.  Dr. Axelrod determined that the outer ring of houses in Love Canal, meet all of the habitability criteria.  In 1990 ten  houses were placed back on the market of which four were sold.  Houses in emergency declaration areas 1, 2, and 3 did not meet these criteria.  Monitoring and treatment  of hazardous waste in the capped canal area are projected to continue for another 30 years.  Litigation is in progress for reimbursement of cleanup costs of $150-$160 million between Occidental Chemical Corporation (previously Hooker Chemical), U.S. EPA, and NYSDEC.  Total lawsuit is for between $600-$700 million which includes punitive damages.</p>

            <p className={classes.label}>Exposure Assessment:</p>
            <p>Dioxin contaminated fish and crayfish were found in Black Creek which runs adjacent to Love Canal.  Dioxin contamination was found in sediments of Bergholtz, Black and Cayuga Creeks.</p>

            <p>U.S. EPA announced that some of these residents have suffered chromosome damage from exposure to toxic chemicals buried at the Canal.</p>

            <p className={classes.label}>Source Information:</p>
            <p>The sources for the above information are from the following publications:</p>
            <ul>
                <li>(1) New York State, Department of Environmental Conservation, Division of Hazardous Waste Remediation, Love Canal Hazardous Waste Site: A Remedial Chronology, December 1989,</li>
                <li>(2) Love Canal, Emergency Declaration Area Decision on Habitability, Sept. 1998, by N.Y. State Commissioner of Health, David Axelrod, M.D., </li>
                <li>(3) video tape of TV program, “Love Canal: Ten Years Later”, Phil Donahue Show, July 16, 1991, </li>
                <li>(4) video tape of TV program, “Inside Albany”, station WNET, on Sept .30, 1998, </li>
                <li>(5) “Love Canal, A Special Report to the Governor and Legislature”, April 1981, by the N.Y. State Dept. of Health Commissioner, David Axelrod, M.D.,</li>
                <li>(6) “Love Canal” by Lois Gibbs.</li>
            </ul>


            <p className={classes.label}>Cleanup Approach:</p>
            <p>This Site has been addressed in seven stages: initial actions and six longterm remedial action phases, focusing on:</p>
            <ul>
                <li>landfill containment with leachate collection, treatment, and disposal;</li>
                <li>excavation and interim storage of the sewer and creek sediments;</li> 
                <li>final treatment and disposal of the sewer and creek sediments and other Love Canal wastes;</li> 
                <li>remediation of the 93rd Street School soils;</li>
                <li>EDA home maintenance and technical assistance to the Love Canal Area Revitalization Agency (LCARA); and,</li>
                <li>buyout of homes and other properties in the EDA through LCARA.</li>
            </ul>
            


            <p className={classes.label}>Three other short-term remedial actions:</p>
            <ul>
                <li>the Frontier Avenue Sewer remediation,</li>
                <li>the EDA 4 soil removal, and</li>
                <li>the repair of a portion of the Love Canal cap, were completed in 1993.</li>
            </ul>

            <p className={classes.label}>Cleanup Progress:</p>
            <p>In 1988, EPA issued the Love Canal EDA Habitability Study (LCHS), a comprehensive sampling study of the EDA to evaluate the risk posed by the Site. Subsequent to the issuance of the final LCHS, the New York State Department of Health (NYSDOH) issued a Decision on Habitability, based on the LCHS's findings.</p>
            
            <p className={classes.label}>This Habitability Decision concluded that: </p>
            <ul>
                <li>Areas 1-3 of the EDA are not suitable for habitation without remediation but may be used for commercial and/or industrial purposes and</li>
                <li>Areas 4-7 of the EDA may be used for residential purposes, i.e., rehabitation.</li>
            </ul>
                
            <p>The following represent the make up of the Love Canal bagged waste materials which are currently being stored at OCC's facilities, awaiting final disposal. A portion of these materials have recently been incinerated at an off-site TDU.</p>
                
            <ul>
                <li>Creek and Sewer Sediment Wastes 38,900 yds3 @ 1.6 tons/yd3 = 62,240 tons</li>
                <li>Collected DNAPL 16,500 gallons</li>
                <li>Filtered DNAPL 11,800 gallons</li>
                <li>Carbon Filter Wastes 240,000 lbs</li>
                <li>Leachate collecetd</li>
                <li>Diatomaceous earth</li>
            </ul>
            
       
            <p>As shown above, numerous cleanup activities, including landfill containment, leachate collection and treatment and the removal of the contaminated sewer and creek  sediments and other wastes, have been completed at the Site. These completed actions have eliminated the significant contamination exposure pathways at the Site, making the Site safe for nearby residents and the environment.</p>
                
            <p>As a result of the revitalization efforts of LCARA, new homeowners have repopulated the habitable areas of the Love Canal EDA. More than 200 formerly-abandoned homes in the EDA have been rehabilitated and sold to new residents, creating a viable new neighborhood.</p>

            <p><span className={classes.label}>Cleanup Activities Yet to Be Performed:</span>  During 1999, OCC will perform the final disposal, including off-site incineration and/or landfilling, for the above-delineated wastes.</p>

            <p>Information Source:</p>
            <p>The above information is from the following on-line publications:</p>
            <p>US EPA Region 2 NPL Fact  Sheet, EPA ID# NYD000606947,  March 29, 1999, www.epa.gov/region02/superfnd/site_sum/0201290c.htm</p> 

            <p className={classes.label}>UPDATE2004:</p>
            <p>Love Canal has been removed from the National Priorities List as of September 30, 2004. Please read the update links regarding the Love Canal remediation and clean-up in the linked NPL Fact Sheet and the EPA News releases. These are listed in the U.S. EPA region, Superfund Division, 2004.</p>

            <p>NPL Fact Sheet, January 2004, Love Canal (pdf 37.02 KB) http://www.epa.gov/region02/superfund/npl/0201290c.pdf</p>

            <p>News release, "EPA Removes Love Canal from Superfund List," Sept. 30, 2004. http://www.epa.gov/superfund/news/lovecanal.htm</p>

            <p>Federal Register Notice, "Final Rule: Notice of deletion of the Love Canal Superfund site from the National Priorities List." http://www.epa.gov/superfund/sites/npl/d040930.htm</p>
        </Typography>
    );
}