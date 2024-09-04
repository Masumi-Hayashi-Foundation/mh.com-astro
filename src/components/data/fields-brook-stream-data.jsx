import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    dataContainer: {
        padding: '4rem 1rem 1rem 0rem',
        maxWidth: '40rem',        
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

export default function FieldsBrookStreamData() {

    const classes = useStyles();
    
    return (
        <Typography variant='body2' className={classes.dataContainer}>

            <Typography variant='h3' color='primary'>EPA SUPERFUND SITE - FIELDS BROOK STREAM</Typography>
            <p>Ashtabula County, Ohio</p>
            <p>June, 1991.</p>


            <p className={classes.label}>History:</p>
            <p>Fields Brook Stream was placed on the National Priorities List in 1983.  This site includes 3.5 miles of Field Brook Stream, a tributary that flows into the Ashtabula River, which then empties into Lake Erie about 8,000 feet downstream of Fields Brook.  The stream flows westerly through 14 adjoining industrial properties.  This EPA Superfund site includes not only toxic and hazardous wastes, but also includes radioactive wastes.</p>

            <p className={classes.label}>Current Status:</p>
            <p>The 1986 feasibility study/remedial action has recommended the operation of an incinerator to burn the stream’s toxic sediment.  Sediment, surface water and fish were found to be contaminated with volatile organic compounds, PCBs, and heavy metals. Contaminated sediments threaten drinking water intakes in Lake Erie.  There is a health advisory recommending people do not eat fish caught in Fields Brook Stream as well as fish in a portion of the Ashtabula River.</p>

            <p>EPA determined that no immediate actions were required at the Fields Brook site while further studies are taking place and cleanup activities are being planned. </p>

            <p className={classes.label}>Exposure Assessment:</p>
            <p>U.S. EPA states that contamination does not necessarily imply a hazard to human health, welfare, or environment.</p>

            <p>A radiation survey conducted on March 25th, 1980, noted elevated radiation levels in Fields Brook near the site, but detected no radiation levels in excess of NCR standards.  Reactive Metals Incorporated (RMI) processed a number of metals including uranium and plutonium from the mid-60’s to the mid 70’s.  Some uranium flowing from Fields Brook Stream into the Ashtabula River sediment has made it hazardous for the Corps of Engineers to dredge the bottom of the Ashtabula River.</p>

            <p>In a 1976 study, fish showed the greatest variety of chlorinated organics of all rivers studied within 60 major United States watersheds including the presence of PCB’s and hexachlorobenzene.</p>

            <p className={classes.label}>Sources:</p>
            <p>The sources for the above information is from the following publications:
            <br />(1) US EPA Fact Sheet, October 1990,
            <br />(2) US EPA Feasibility Study: Fields Brook Site, Sediment Operable Unit, Ashtabula, Ohio, July 3, 1983, EPA 19.5l46.0,
            <br />(3) US EPA Final Remedial Investigation Report; Fields Brook Site, Ashtabula, Ohio, March 28, 1985, WA19.5l46.0, W65246.CO,
            <br />(4) “EPA Releases inventory of toxic releases in Ohio”, by Dave Hrinda, Ashtabula Star Beacon, Dec. 28, 1990.
            <br />(5) “March start on dredging on ‘50-50’”, by Dave Davis and Tom Brekenridge, The Plain Dealer, Oct. 17, 1990. </p>

            <p className={classes.label}>February 2000.</p>

            <p className={classes.label}>Cleanup Process:</p>
            <p>In 1986, a final cleanup decision for the Fields Brook sediment operable unit was reached between USEPA and the state. In 1989, USEPA issued a Unilateral Administrative Order (UAO) to require the potentially responsible parties (PRPs) to design and implement the 1986 Record of Decision (ROD) for the Fields Brook sediment. Recognizing that contaminated sediment was only part of the problem, USEPA required the PRPs to also investigate the adjacent floodplain/wetland area and conduct a search for the source(s) of site contamination.</p>

            <p>The investigation of the floodplain/wetland areas along Fields Brook found that contamination, especially PCBs, did extend into the soils adjacent to the Brook. USEPA issued a ROD on June 30, 1997, to select the remedy for the floodplain/wetlands Operable Unit (OU). The remedy requires the excavation and disposal of PCB-contaminated soil in both industrial and residential portions of the OU. In addition, soils with low-level PCB contamination near residential areas will be covered to reduce erosion into the Brook. An on-site landfill will be built within the industrial area of the Fields Brook watershed to house PCB-contaminated soils and sediment from site.</p>

            <p>In August, 1997, USEPA issued an Explanation of Significant Differences (ESD) which modified the original 1986 ROD. The ESD eliminated the need for on-site thermal treatment by allowing off-site treatment of contaminated sediment. The ESD also decreased the volume of sediment requiring excavation and eliminated the solidification requirement for sediments to be landfilled.</p>

            <p>On September 30, 1997, SEPA issued a ROD to select remedies for six source areas that could potentially recontaminate the Brook. In general, remedies require excavation and containment.</p>

            <p>In 1998, low-level radionuclides were discovered in the soil and mining residuals at the Millennium Inorganic Chemicals TiCl4 facility (one of the industrial source areas addressed by the September 1997 source control ROD) and in Fields Brook sediment and floodplain/wetland soils. The discovery of the low-level radionuclides (primarily radium-226 and radium-228) complicated the cleanup designs that were then underway. On April 8, 1999, the U.S. EPA issued a Site-Wide ESD which modified all existing RODs for the site, established radionuclide cleanup levels, and outlined the design modifications necessitated by the presence of the radionuclides. Progress has resumed on the designs to address contamination in Fields Brook sediment and the floodplain/wetlands soils.</p>

            <p><span className={classes.label}>Cleanup work at the Fields Brook operable units is expected to proceed according to the following schedule: </span></p>

            <p><span className={classes.label}>Millennium Inorganic Chemicals TiCl4 Facility</span> - Excavation of approximately 60,000 cubic yards of PCB- and radium-contaminated soil and mining residuals. Disposal in the existing Millennium on-site landfill. The work is expected to start in June of 1999 and should be physically complete by the end of 1999, with inspection and reporting requirements complete by March of 2000.</p>

            <p><span className={classes.label}>Fields Brook Sediment and Floodplain/Wetland Soils </span>- The 100% design is currently being prepared. Construction of an on-site landfill is expected to begin in the Spring of 2000. Following completion of the landfill, excavation of Fields Brook soil and floodplain/wetland sediment will begin. The major components of the brook and floodplain/wetlands cleanup are expected to be complete by the end of 2001, with some restoration, inspection and reporting activities left to be addressed in 2002.</p>

            <p><span className={classes.label}>RMI Metals</span> - The excavation and disposal of PCB-contaminated soil will proceed when the Fields Brook landfill is complete. The cleanup work is expected to be performed in late 2000.</p>

            <p><span className={classes.label}>Acme Scrap Iron and Metals / South Sewers</span> - The excavation and disposal of PCB-contaminated soil will proceed when the Fields Brook landfill is complete. The South Sewers will then be cleaned. All work on this OU is expected to be performed in late 2000.</p>

            <p><span className={classes.label}>Detrex Inorganic Chemicals</span> - Construction of a slurry wall and installation of DNAPL extraction wells is expected to start in early 2000. After an evaluation of the capture of the extraction wells, a determination will be made whether additional extraction wells are required.</p>

            <p><span className={classes.label}>North Sewers</span> - The complete grouting and replacement of the contaminated North Sewers is expected to be performed in 2000.</p>

            <p>Physical construction at the Conrail source control OU was completed in December of 1998. </p>

            <p>Arsenic-contaminated soil was excavated and shipped for disposal off-site. The Conrail cleanup has been inspected and U.S. EPA is awaiting a final report from the Responsible Parties.</p>

            <p className={classes.label}>Sources:</p>
            <p>The sources for the above information is from the following on-line publication:
            US EPA, Region 5, NPL Fact Sheet , OHIO EPA ID# OHD980614572, 19th Congressional District, May, 1999,  www.epa.gov/region5superfund/npl/ohio/OHD980614572.htm </p>


        </Typography>
    );
}


