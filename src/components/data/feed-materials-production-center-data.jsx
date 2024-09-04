import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '4rem 1rem 1rem 0rem',
        maxWidth: '40rem',

        "& p": {
            marginTop: '.5rem',
        }
    },

    label: {
        fontWeight: 800,
        color: theme.palette.primary.main,
        marginTop: '1rem',
        display: 'inline-block'    
    },
    p: {
        marginTop: '1rem',
    }
  
}));

export default function FieldsBrookStreamData() {

    const classes = useStyles();
    
    return (
        <Typography variant='body2' className={classes.root}>

            <Typography variant='h4' color='primary'>EPA SUPERFUND SITE - FEED MATERIALS PRODUCTION Center (U.S. DOE)</Typography>
            <p>Fernald, Ohio</p>
            <p>June 1992</p>


            <p className={classes.label}>History:</p>
            <p>The 1,050-acre Feed Materials Production Center site is part of a nuclear weapons complex owned by the Department of Energy (DOE). National Lead of Ohio, Inc. operated the facility from 1953 through 1985. In 1986, Westinghouse Materials Company of Ohio operated the facility. In 1991, the site name was changed to Fernald Environmental Management Project and went from Defense Programs to Environmental Programs within in the DOE structure. This site is primarily a uranium metal processing facility that produces uranium fuel elements, target cores, and other uranium products for use in the US nuclear weapons program. Large quantities of wastes, including low-level radioactive wastes, mixed hazardous and radioactive wastes, mixed hazardous and radioactive wastes, oils, solvents, and flyash were produced. Contamination occurred in the production area, six waste pits, three waste storage silos (one containing wastes from the Manhattan project), a storm sewer ditch leading to Paddy's Run Creek, and an effluent line discharging into the Great Miami River. Additional waste storage and disposal areas included other silos, a burn pit, a clear well, two flyash disposal areas, a sanitary landfill, and two lime sludge ponds. Uranium contaminates the Buried Valley aquifer, the sole source of drinking water for the production center workers and most area residents. The Great Miami River is used for various recreational purposes. Cincinnati is 19 miles southeast and downstream of this site. This site was placed on the National Priorities List in 1989.</p>

            <p className={classes.label}>Current Status:</p>
            <p>The 1988 Consent Agreement established schedules for completing remedial and removal activities at the Fernald Superfund site. This site has been divided in five operable units with differing schedules for investigation, cleanup, removal actions, and safe shutdown for each site. Site investigations were expected to be complete in 1991. A Federal Facilities Compliance Agreement was signed in 1986 between the EPA and DOE. Previous to this time, federal agencies were exempt. The EPA determined that no immediate actions were required at the Feed Materials Production Center site while studies are taking place and cleanup activities are being planned.</p>

            <p className={classes.label}>Exposure Assessment:</p>
            <p>Radon gas has been detected in the air. Fish and plants contain radionuclides and heavy metals. Ground water is contaminated with uranium, and various volatile organic compounds (VOCs). The Buried Valley aquifer is contaminated with uranium. Metallic scrap contained in several scrap piles is contaminated with uranium and other radionuclides. Creek and ditch sediments are contaminated with radionuclides, organics, inorganics, and asbestos. High concentrations of uranium, technetium, and hexavalent chromium have been detected in the effluent line discharging to the Great Miami River. Three uranium contaminated private wells have been closed and are no longer used for drinking water. Although the facility has ceased all production it continues to generate both radioactive and non-radioactive hazardous wastes. Potential health threats to people include accidentally ingesting, touching, or inhaling contaminated soil, ground water, air, and surface water. Eating contaminated plants and fish is also a potential threat.</p>

            <p className={classes.label}>Source Information:</p>
            <p>(1) US Department of Energy, Closure Plan for the Feed Materials Production Center, Feb. 1991, pages 4-16,
            <br />(2) US EPA National Priorities List Sites: Ohio, Feed Production Materials Center, pages 19-20, Sept. 1990, EPA/540/-90/035,
            <br />(3) US EPA Fact Sheet, Project update: Amended Consent Agreement Signed for the Fernald Superfund Site in Fernald, Ohio, Oct. 1991,
            <br />(4) US EPA Fact Sheet, Project Update: FMPC Consent Agreement, May 1990,
            <br />(5) "Fernald Water Plan under Fire," The Plain Dealer, Nov. 24, 1990.
            </p>

            <p className={classes.label}>February 2000 Update</p>

            <p className={classes.label}>Cleanup Progress:</p>
            <p>DOE and U. S. Environmental Protection Agency (USEPA) entered into a Comprehensive Environmental Resource, Compensation, and Liability Act (CERCLA) 120/106 (a) Consent Agreement (CA) in 1990, which was subsequently modified in 1991. However, the Ohio Environmental Protection Agency (OEPA) is extensively involved in overseeing the cleanup with USEPA and reviewing technical documents. All five Record of Decisions (RODs) were signed between 1994 and 1996, addressing all of the operable units (OUs) at the site, and 25 of the 30 removal actions were completed between 1991 and 1997. Construction is currently underway upgrading and constructing a railroad line and preparing the facility for an off-site contractor to build a thermal dryer to treat and ship 600,000 cubic yards of waste pit materials to Envirocare of Utah. A contractor was selected to treat and dispose of the material in November, 1997. The first waste shipments of pit material are schedule to begin in March, 1999. Construction has begun on an on- site disposal facility of which the first module is complete. The facility will begin disposing contaminated soil and materials from various on-site disposal areas this summer. Progress is continuing with over 50% of the safe shut down completed at the 130 buildings on-site; and to date five major structures have undergone complete demolition.</p>

            <p>Construction of a pilot plant for vitrification of radium wastes contained in three silos was completed in 1996. However, failures in this pilot plant and other delays occurred. A dispute occurred regarding this issue, but it was resolved in July, 1997, with revised schedules for completion of the remedial activities. Off-site groundwater contamination is being contained via an extraction system installed in 1991. Several new extraction and injection wells are installed and will be operational in August, 1998, to further address and expedite groundwater contamination. Overall, the cleanup is being expedited which will reduce cleanup time by ten years and save over $2 billion. Total cleanup costs are estimated at $4.5 billion.</p>

            <p>Construction of the thermal dryer will begin for treatment of 600,000 cubic yards of materials in six pits, and all railroad upgrades for shipment of the materials to Envirocare in Utah will be complete. Excavation of two waste units will be completed and the materials will be disposed in cell one of the on-site disposal cell. Cell Two will be also be constructed for receipt of materials the following construction season. Safe shutdown of the several buildings will be completed and the boiler plant will be dismantled. The contract for treatment of thorium materials in Silo 3 will be issued. Design work for early waste retrieval of radium materials from Silos 1 and 2 will also continue. Soil excavation and certification will continue in two different areas to achieve cleanup levels. The contaminated soil will be disposed in the on-site disposal cell. The first phase of the on-site groundwater extraction system will be installed and operational in fiscal year 1998. The off-site groundwater containment and extraction system will continue to operate.</p>

            <p className={classes.label}>Information Source:</p>
            <p>The sources for the above information is from the following on-line publication:
            US EPA, Region 5, NPL Fact Sheet , OHIO EPA ID# OH6890008976, February, 1998.
            www.epa.gov/region5superfund/npl/ohio/OH6890008976.htm </p>

            <p className={classes.label}>UPDATE - October 2004:</p>
            <p>Based on DOE's baseline schedule developed in 2001, the cleanup is expected be completed by 2006 with a total cost of $4 billion. Expedited activities and cooperation between the United States Environmental Protection Agency (U.S. EPA), the Ohio Environmental Protection Agency (Ohio EPA), DOE and its contractor Flour Fernald have resulted in reducing cleanup costs by $2 billion. Much of the success of this project has been as a result of the cooperative relationships between Ohio EPA and U.S. EPA working together as joint regulators to push progress on this large DOE complex.</p>

            <p>NPL Fact Sheet, January 2004, EPA Superfund Site, Feed Materials Production Center, Department of Energy, Fernald, Ohio.
            http://www.epa.gov/R5Super/npl/ohio/OH6890008976.htm </p>
    


        </Typography>
    );
}


