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
    display: 'inline-block',
  },
  title: {},
}));

export default function BigDCampgroundData() {
  const classes = useStyles();

  return (
    <Typography variant="body2" className={classes.dataContainer}>
      <Typography variant="h4" className={classes.title} color="primary">
        <span className={classes.label}>EPA Superfund Site:</span> Big D
        Campground
      </Typography>
      <p>Ashtabula County, Ohio</p>

      <p>February 1992</p>

      <p className={classes.label}>History:</p>
      <p>
        The Big D Campground Superfund site is a ten-acre property formerly used
        as a sand and gravel quarry. Between 1964 and 1976, an estimated 25,000
        to 30,000 cubic yards of non-hazardous and hazardous industrial bulk
        wastes, drums, and soil were disposed of at the site. Leachate from the
        site is contamination Conneaut Creek and ground water beneath the site.
        The site is located just south of Creek Road about 1 1/2 miles northeast
        of Kingsville, and is named after the Big D Campground which forms the
        eastern border. This site was placed on the National Priorities List in
        1983.
      </p>

      <p className={classes.label}>Current Status:</p>
      <p>
        From 1986 through 1987, US EPA and Ohio EPA conducted a remedial
        investigation of the dump site. This investigation revealed the presence
        of organic compounds (chlorobenzene and vinyl chloride) and metals in
        ground water, and raised concern of the possibility of leaking drums.
        The proposed remedial action involves excavation and incineration of the
        landfill waste, drums, and contaminated soil, collection and treatment
        of contaminated ground water, and ongoing monitoring of ground water and
        surface water. The remedial design, excavation, incineration and
        re-landscaping of the site is expected to take 2 1/2 years, with ground
        water collection, treatment, and monitoring activities continuing for an
        additional 20 to 60 years. The total cost of the remedial action is
        estimated to be $39 million. In March 1990, US EPA ordered the
        potentially responsible parties to implement the remedial action chosen.
        If no settlement is reached, US EPA will undertake the cleanup and take
        legal action against the potentially responsible parties to recover
        costs.
      </p>

      <p className={classes.label}>Source Information:</p>
      <p>
        (1) US EPA National Priorities List Sites: Ohio, Sept. 1990, Big D
        Campground, pages 7-8, EPA/540/4-90/035, (2) EPA Fact Sheet, Big D
        Superfund Site Cleanup Plan Chosen, Nov. 1989.
      </p>

      <p>February 2000</p>

      <p className={classes.label}>Cleanup Progress:</p>
      <p>
        A Record of Decision (ROD) for the site was signed in 1989. In 1992,
        Olin Corporation initiated Remedial Action (RA) pursuant to a design
        approved by USEPA under a Unilateral Administrative Order (UAO) issued
        in 1990. All source area materials were excavated from the landfill and
        incinerated on-site between September, 1992, and March, 1994. Total
        volume of wastes exceeded the previous estimates by approximately 65,000
        cubic yards. The incinerator ash was determined to be delistable and was
        placed back into the landfill, along with all non-combustible materials
        that had been excavated. Two feet of topsoil was placed over the ash and
        vegetated, and the incineration project was demobilized in October,
        1994. A treatment system was constructed to treat contaminated storm
        water runoff collected from the excavation and from within a bermed
        area. In 1994, a groundwater extraction system was installed to collect
        contaminated groundwater that was migrating to the north and to the
        south. The groundwater is treated by the same on-site treatment system.
        Since February, 1995, Olin corporation has been conduction site
        operation and maintenance for the groundwater remedy. A preliminary
        closeout report was signed on May 9, 1995. The pump and treat system has
        successfully reduced the concentrations of heavy metals. In November,
        1997, US EPA approved changes to the groundwater treatment system to
        help reduce operation and maintenance costs. Portions of the system that
        are no longer needed to treat heavy metals were eliminated. The
        anticipated savings is at least $64,500 per year, for a present value of
        over $1 million. In February 1999, Olin corporation submitted a proposal
        to the agency to allow for natural attenuation and to reduce the number
        of contaminants monitored. The proposal is currently being reviewed by
        the agency.{' '}
      </p>

      <p className={classes.label}>Information Source:</p>
      <p>
        The above information is from the following on-line publications: US EPA
        Region 5 NPL Fact Sheet, OHIO EPA ID# OHD980611735 May 1999,
        www.epa.gov/region5superfund/npl/ohio/OHD980611735.htm{' '}
      </p>
    </Typography>
  );
}
