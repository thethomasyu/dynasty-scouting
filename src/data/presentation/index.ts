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

// 2027 QB class (provisional)
import archManning from './arch-manning'
import danteMoore from './dante-moore'
import lanorrisSellers from './lanorris-sellers'
import cjCarr from './cj-carr'
import drewMestemaker from './drew-mestemaker'
import darianMensah from './darian-mensah'
import trinidadChambliss from './trinidad-chambliss'
import jaydenMaiava from './jayden-maiava'
import julianSayin from './julian-sayin'
import samLeavitt from './sam-leavitt'
import johnMateer from './john-mateer'
import drakeLindsey from './drake-lindsey'

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
  // 2027 QB class (provisional)
  'arch-manning': archManning,
  'dante-moore': danteMoore,
  'lanorris-sellers': lanorrisSellers,
  'cj-carr': cjCarr,
  'drew-mestemaker': drewMestemaker,
  'darian-mensah': darianMensah,
  'trinidad-chambliss': trinidadChambliss,
  'jayden-maiava': jaydenMaiava,
  'julian-sayin': julianSayin,
  'sam-leavitt': samLeavitt,
  'john-mateer': johnMateer,
  'drake-lindsey': drakeLindsey,
}
