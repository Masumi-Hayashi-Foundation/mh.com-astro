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
    },
    label: {
        fontWeight: 800,
        color: theme.palette.primary.main,
        marginTop: '1rem',
        display: 'inline-block'    
    },
    title: {

    }
  
}));

export default function LaskinPoplarData() {

    const classes = useStyles();
    
    return (
        <Typography variant='body2' className={classes.root}>
            <Typography variant='h3'>EPA SUPERFUND SITE - LASKIN/ POPLAR OIL COMPANY</Typography>

            <p>Jefferson, Ohio</p>
            <p>February 1992</p>
            
            <p className={classes.label}>History:</p>
            <p>In 1890, this site was operated as a greenhouse. By the 1950's, oil-fired boilers to heat the greenhouses were installed. In the 1960's, storage tanks and pits were installed for a waste oil recovery operation. Subsequent storage, handling, and combustion of the waste oil caused groundwater contamination into Cemetery Creek which is a tributary to the Grand River which is a source of drinking water. In 1981, US EPA and Ohio EPA discovered PCBs in soil and ground water. In 1983, Laskin Poplar Oil Company was placed on the National Priorities List.</p>

            <p className={classes.label}>Current Status:</p>
            <p>In 1989, remedial action began and includes a multilayer cap, groundwater control with construction of a trench, and a dioxin incineration. In 1991, the transportable, rotary kiln incinerator was installed and will be in operation for up to 8 months. Ash waste residue from the incinerator will be buried under the capped portion on the south, east, and west portions to contain the contaminated soil.</p>

            <p>This remedial action will cost $10 million to implement and $1 million to operate and maintain over the next 30 years. Offsite disposal of ash would increase costs about $120 million. EPA has imposed deed restrictions on the future use of this land. The potentially responsible parties are represented by the Laskin Site Group. They have designed and financially accepted responsibility for the clean-up of the site.</p>

            <p className={classes.label}>Exposure Assessment:</p>
            <p>Excess lifetime cancer risk levels were calculated. The Risk Assessment concluded that repeated exposure to site contaminants in the soil, sediment, ash, and ground water could result in unacceptable public health risks.</p>

            <p className={classes.label}>Source Information:</p>
            <p>The source of the above information is from the following publications:
            (1) US EPA National Priorities List: Ohio, Laskin/Poplar Oil Co., pages 27-28, September 1990, EPA/540/4-90/035, (2) EPA Fact Sheet, Record of Decision Signed for the Laskin/ Poplar Oil Site, August 1989, (3) EPA Fact Sheet, Laskin Poplar Oil Site, Jefferson, Ohio, April 1989, (4) EPA Fact Sheet, Remedial Investigation Completed at the Laskin Poplar Oil Site, March 1989, (5) US EPA Fact Sheet, Laskin /Poplar Oil Superfund Site, Jefferson, Ohio, October 1991. </p>

            <p className={classes.label}><Typography variant='h4'>February 2000 Update</Typography></p>

            <p className={classes.label}>Cleanup Progress:</p>
            <p>In 1981-1982, USEPA took several emergency actions, including draining two ponds, diversion of surface water run off to a retention pond, removal and off-site incineration of 302,000 gallons of waste oil, treatment and discharge of 430,000 gallons of contaminated surface water, and solidification of 205,00 gallons of sludge. In 1985-1986, under a Unilateral Administrative Order (UAO), private parties removed of 250,000 gallons of oil and wastewater from the pits and tanks.</p>

            <p>In 1987, USEPA approved a Record of Decision (ROD) for source removal. Under UAOs, the private parties initiated work on design of the source removal work. Meanwhile in 1983-1989, USEPA conducted a Remedial Investigation/Feasibility Study (RI/FS). Groundwater and soils were contaminated by a large number of contaminants, including polyaromatic hydrocarbons, PCB, lead, and 2,3,7,8-tetrachlorodibenzodioxin. In 1989, USEPA issued a ROD for the final Remedial Actions (RAs) at the site, which primarily included diversion of groundwater from the site and construction of a low-permeability cap over the site.</p>

            <p>In 1989, a group of private parties entered into a Consent Decree (CD) with USEPA to implement the 1987 and 1989 RODs. In 1991-1993, the private parties completed the source removal and construction work. The source removal work included on-site incineration of oils, sludge, tanks, drums, boiler house equipment, the boiler house structure and stack,boiler house soils, pit structures, and source soils. In all, 7,500 tons of source material was incinerated. In addition, 164,360 gallons of wastewater were treated and discharged, and 49.5 cubic yards asbestos material from the boiler house were removed. 40 cubic yards of the asbestos material was disposed in an off-site landfill, while 9.5 cubic yards were contained in an on-site vault because of dioxin contamination. The final remedial actions included construction of a groundwater diversion trench and slurry cut-off walls, which have successfully lowered the water table to below the contaminated soil. The soils are further isolated by a low-permeability cap over the site, which has successfully eliminated the direct contact threat and reduced infiltration. Since 1993, private parties have been conducting maintenance and monitoring activities, which has verified that the final remedial actions have remained effective.</p>


            <p className={classes.label}>Information Source:</p>
            <p>The above information is from the following on-line publications:
            US EPA Region 5 NPL Fact Sheet, OHIO EPA ID# OHD061722211, May 1999,
            www.epa.gov/region5superfund/npl/ohio/OHD061722211.htm </p>

            <p className={classes.label}>October 2004 Update</p>


            <p className={classes.label}>UPDATE2004:</p>
            <p>This site is still in process of remediation and clean up.
            Please read the update NPL Fact Sheet linked below. This is listed in the U.S. EPA region, Superfund Division, District 5, Jan. 2004. </p>

            <p>NPL Fact Sheet, January 2004, EPA Superfund Site, Laskin Poplar Oil Co., Jefferson, Ohio. http://www.epa.gov/R5Super/npl/ohio/OHD061722211.htm</p>

        </Typography>
    );
}


