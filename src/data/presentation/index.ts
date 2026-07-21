import type { Presentation } from './types'

import amariThomas from './amari-thomas'
import wesco from './bryant-wesco-jr'
import coleman from './cam-coleman'
import becker from './charlie-becker'
import barkate from './cooper-barkate'
import robinson from './deuce-robinson'
import mccuin from './devin-mccuin'
import singleton from './eric-singleton-jr'
import greathouse from './jaden-greathouse'
import smith from './jeremiah-smith'
import faison from './jordan-faison'
import johnson from './kenny-johnson'
import duff from './kj-duff'
import craver from './mario-craver'
import matthews from './mike-matthews'
import marsh from './nick-marsh'
import harbor from './nyck-harbor'
import miller from './omarion-miller'
import harris from './reed-harris'
import rcw from './ryan-coleman-williams'
import wingo from './ryan-wingo'
import moore from './tj-moore'
import young from './wyatt-young'

/**
 * Per-player presentation configs, keyed by slug. Every completed profile
 * has one; the composition varies because the evaluations vary. The
 * canonical markdown stays the source of scouting truth; these configs
 * only structure it.
 */
export const presentations: Record<string, Presentation> = {
  'amari-thomas': amariThomas,
  'bryant-wesco-jr': wesco,
  'cam-coleman': coleman,
  'charlie-becker': becker,
  'cooper-barkate': barkate,
  'deuce-robinson': robinson,
  'devin-mccuin': mccuin,
  'eric-singleton-jr': singleton,
  'jaden-greathouse': greathouse,
  'jeremiah-smith': smith,
  'jordan-faison': faison,
  'kenny-johnson': johnson,
  'kj-duff': duff,
  'mario-craver': craver,
  'mike-matthews': matthews,
  'nick-marsh': marsh,
  'nyck-harbor': harbor,
  'omarion-miller': miller,
  'reed-harris': harris,
  'ryan-coleman-williams': rcw,
  'ryan-wingo': wingo,
  'tj-moore': moore,
  'wyatt-young': young,
}
