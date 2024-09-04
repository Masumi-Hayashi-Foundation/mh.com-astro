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

export default function IndustrialExcessLandfillData() {

    const classes = useStyles();
    
    return (
        <Typography variant='body2' className={classes.root}>
            <Typography variant='h3'>EPA SUPERFUND SITE - INDUSTRIAL EXCESS LANDFILL</Typography>
            <p>Uniontown, Ohio</p>
            <p>February 1992</p>

            <p className={classes.label}>Uniontown</p>

            <p className={classes.label}>History:</p>
            <p>Industrial Excess Landfill accepted residential, commercial, and industrial waste from 1966 to 1980. this 30 acre, privately owned Superfund site is located on Cleveland Avenue, one-third mile from the center of town in Uniontown, Ohio. This landfill was covered with a layer of clean soil when it closed in 1980. Vegetation has grown over this toxic waste site. Ground water contamination has been documented and the source ground water is used by approximately 19,000 people in the area. This site was added to the National Priorities List in 1985.</p>

            <p className={classes.label}>Current Status:</p>
            <p>US EPA rejected the cleanup proposal by the potentially responsible parities in 1989 and will implement its own plan and bill the potentially responsible parties after the work is completed. The US EPA plan involves capping the landfill with clay, gravel, and plastic, venting of methane gas, treatment of leachate, purifying contaminated groundwater, and relocation of nearby residents. In 1986, EPA installed a gas-venting system along two sides of the dump to collect and burn the methane gas that was sweeping out of the landfill and accumulating under some homes.</p>

            <p className={classes.label}>Exposure Assessment:</p>
            <p>An active methane extraction system was implemented at the site in 1986. This emergency action was taken by US EPA to eliminate the migration of landfill gases into homes adjacent to the landfill. In-home water treatment systems were placed in 10 homes in 1987 to treat contaminated or potentially contaminated water supplies. On-site contamination includes organic compounds and metals in the ground water, soil and sediment; barium and nickel in several residential and business water wells; and contaminated gas leaking from the landfill.</p>

            <p className={classes.label}>Source Information:</p>
            <p> 	The above information is from the following publications:
            (1) US EPA National Priorities List Sites: Ohio, Industrial Excess Landfill, Uniontown, September 1990, EPA/540/4-90/035. </p>

            <p className={classes.label}>February 2000 Update</p>

            <p className={classes.label}>Cleanup Progress:</p>
            <p>Between 1985 and 1988, USEPA installed a methane venting system at the site to control the migration of methane and landfill gases off site. During installation of this system, 53 drums of suspected industrial waste were uncovered. These drums were removed and disposed in a USEPA-approved facility. Residential well sampling performed in 1987 showed that ten private wells were being impacted by groundwater contaminated by VOCs. USEPA installed air strippers in the affected residences to remove the contaminants. In 1987, USEPA signed a Record of Decision (ROD) requiring that an alternate water supply be installed to an area comprised of 100 homes down gradient of the site where groundwater threatened to contaminate wells before an overall cleanup could eliminate the problem. Under order by the USEPA, several potentially responsible parties (PRPs) constructed the alternate water supply, which was completed in 1991. In July 1989, USEPA signed a ROD selecting the following actions to clean up the site: covering the entire site with a multi-layer cap; expanding the landfill gas extraction and treatment system; extracting and treating contaminated groundwater; pumping groundwater to maintain the water table at a level that is below that of the wastes in the landfill; fencing the site; placing deed restriction of future use of the site, and continued monitoring of the site. In 1990, USEPA purchased 22 parcels of land, consisting of twelve residences and two businesses. These properties, which bordered the site, were needed for proper installation of the landfill cap. USEPA-prepared Remedial Design (RD) of the remedy is nearly complete. USEPA is in settlement discussions with the PRPs regarding past costs incurred by USEPA, as well as implementation of the cleanup. Based on results of latest monitoring data gathered in March 1997 and September 1998, U.S. EPA public noticed a proposed plan to modify the cleanup plans outlined in the July 1989 ROD. The data indicated that significantly fewer contaminants are present in the groundwater and that the concentrations of those detected are generally lower. Although there are still sporadic exceedances of drinking water standards for metals detected off-site, there is no evidence that a plume of contamination outside of the site boundaries still exists. As a result, the proposed plan recommends that the pump and treat system be eliminated, along with a redesigned landfill cover. A public meeting was held on March 2, 1999 to discuss this proposed agency action. The public comment period ended April 11, 1999. USEPA expects to have a signed ROD Amendment before the end of 1999. On April 21, 1999, members of the Technical Information Committee (TIC), comprising USEPA, Ohio EPA, ATSDR, local government and citizens groups, and responsible parties, met in Uniontown, Ohio to discuss future events following the public meeting on March 2, 1999. The TIC is an advisory group formed by the July 1989 ROD to provide input on remedial design documents that were prepared subsequent to the issuance of the ROD. Regular TIC meetings were held from 1990 to 1995 prior to the current one.</p>

            <p>USEPA Ombudsman Robert Martin is currently conducting a preliminary review of this site, primarily on radiation issues, to determine if an investigation is warranted. Mr. Martin is expected to come out with his report, containing his recommendations, in the very near future.</p>

            <p className={classes.label}>Information Source:</p>
            <p>The sources for the above information is from the following on-line publication:
            US EPA, Region 5, NPL Fact Sheet, OHIO EPA ID# OHD000377911, May, 1999.
            www.epa.gov/region5superfund/npl/ohio/OHD000377911.htm </p>


            <p className={classes.label}>October 2004 Update</p>

            <p>Uniontown</p>

            <p className={classes.label}>UPDATE2004:</p>
            <p>The U.S. EPA is currently in settlement discussions with the Potentially Responsible Parties regarding past costs incurred by the U.S. EPA at the IEL site, as well as implementation of the September 2002 cleanup plan. Please read the update link. Please read the update NPL Fact Sheet linked below. This is listed in the U.S. EPA region, Superfund Division, District 5, Jan. 2004.</p>

            <p>NPL Fact Sheet, January 2004, EPA Superfund Site, Industrial Excess Landfill, Union Town, Ohio. http://www.epa.gov/R5Super/npl/ohio/OHD000377911.htm</p>
        </Typography>
    );
}


