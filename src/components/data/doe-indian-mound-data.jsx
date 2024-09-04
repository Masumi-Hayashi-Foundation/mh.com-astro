import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4rem 1rem 1rem 0rem',
    maxWidth: '40rem',
    '& p': {
      marginTop: '.5rem',
    },
  },
  label: {
    fontWeight: 800,
    color: theme.palette.primary.main,
    marginTop: '1rem',
    display: 'inline-block',
  },
  title: {},
}));

export default function DOEIndianMoundData() {
  const classes = useStyles();

  return (
    <Typography variant="body2" className={classes.root}>
      <Typography variant="h4" color="primary">
        EPA SUPERFUND SITE - DOE INDIAN MOUND SITE
      </Typography>
      <p>Miamisburg, Ohio</p>
      <p>June 1991</p>

      <p className={classes.label}>History:</p>
      <p>
        The GGE Plant started operations in 1943 and is still in operation. The
        plant is on a 306-acre site owned by the US Department of Energy. Its
        main function is to manufacture non-nuclear components and
        tritium-containing components for nuclear weapons. The site includes a
        landfill in which solvents, paints, photo processing and planting baths
        solutions were deposited; several leach beds used for disposal of
        solutions containing radionucleotides and / or explosive pyrotechnic
        materials; an area where a plutonium spill occurred; ground water
        contaminated with tritium; and 30 acres of soil with potential
        radioactive contamination.
      </p>

      <p className={classes.label}>Miamisburg Indian Mound:</p>
      <p>
        The GGE plant is located across the street from the Miamisburg Adena
        Indian Mound. This mound was erected in prehistoric times by the mound
        builders of the Adena Indian tribe. It was a part of their tradition to
        have graves covered with earth. This is the largest conical mound in the
        area, being 70 feet high, 877 feet in circumference at the base, and
        contains 54,000 cubic yards of earth. The mound contains horizontal
        tunnels and was excavated in 1869.
      </p>

      <p className={classes.label}>Current Status:</p>
      <p>
        The site was placed on the National Priorities List in 1989. US EPA is
        preparing to start remedial investigation and a feasibility study.
      </p>

      <p className={classes.label}>Exposure Assessment:</p>
      <p>
        There was a tritium spill into the Great Miami River. Tritium
        radioactive waste has a lifespan of 12,000 years. Plutonium has a
        lifespan of 240,000 years. The GGE Plant is contaminating the Great
        Miami Barrier aquifier, which supplies the drinking water to the city of
        Dayton.
      </p>

      <p className={classes.label}>Source Information:</p>
      <p>
        (1) EPA National Priorities List Sites: Ohio, Sept. 1990, Mound Plant
        (US DOE), pages 32-33, EPA/540/4-90/035, (20 US Dept. of Energy, Mound
        Plant Site Fact Sheet, Sept. 1990, (3) Mound Plant, Environmental
        Restoration and Waste Management, site specific plan, Feb. 12, 1990, EE
        & G Mound Applied Technologies, operated for the US DOE.
      </p>

      <p className={classes.label}>February 2000</p>

      <p className={classes.label}>Cleanup Progress:</p>
      <p>
        A Federal Facilities Agreement (FFA) was signed by DOE and U. S.
        Environmental Protection Agency (USEPA) in October, 1990. The Ohio
        Environmental Protection Agency (OEPA) signed the FFA in July, 1993.
        DOE, as the lead agency, is conducting the clean-up of the Mound Plan,
        with oversight being provided by USEPA and OEPA.
      </p>

      <p>
        A Record of Decision (ROD) was signed on June 12, 1995, to remove VOC
        contamination from the aquifer underlying the facility by pumping and
        treating the groundwater with an air stripper. Construction of the
        treatment system began in the Fall of 1996, and as of February 18, 1997,
        that system is treating up to 140,000 gallons of groundwater per day.
      </p>

      <p>
        Sediments in the Miami-Erie Canal are contaminated with plutonium-238.
        This was caused by a plutonium waste line break in 1969, and a
        subsequent rain event which washed the contamination down a hillside to
        the canal. In October, 1996, DOE began the removing about 20,000 cubic
        yards of contaminated soil for disposal at an off-site facility. The
        entire removal action is expected to be completed in December, 1997.
      </p>

      <p>
        Several other smaller actions have also taken place at Mound to remove
        radionuclide and VOC contamination. Once the site is cleaned up, the
        city of Miamisburg may take ownership and redevelop the site for
        economic use. There are several removal actions to address radionuclide
        and VOC contamination in soil scheduled to take place in the next few
        years. A new site operations contractor, Babcock & Wilcox, has just
        taken over implementing the site restoration management. They are due to
        release a schedule early in 1998, for completing the cleanup at the
        Mound Plant.{' '}
      </p>

      <p className={classes.label}>Information Source:</p>
      <p>
        The above information is from the following on-line publications: US EPA
        Region 5 NPL Fact Sheet, OHIO EPA ID# OH6890008984, February 1998,
        www.epa.gov/region5superfund/npl/ohio/OH6890008984.ht{' '}
      </p>
    </Typography>
  );
}
