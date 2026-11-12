/**
 * Zones d'intervention — source unique des liens vers les 12 pages de zones,
 * utilisée par la section de l'accueil (FR/EN/IT) et par le pied de page.
 * Pages « hub » = secteurs (golfe de Saint-Tropez, corniche des Maures, Nice) ;
 * les autres sont les pages communes, rangées par département.
 */
import type { Locale } from '@i18n/languages';

export interface ZoneLink {
  path: string;
  label: Record<Locale, string>;
  /** Page de secteur (et non de commune). */
  hub?: boolean;
}

export interface ZoneGroup {
  name: Record<Locale, string>;
  zones: ZoneLink[];
}

const same = (label: string): Record<Locale, string> => ({ fr: label, en: label, it: label });

export const zonesTitle: Record<Locale, string> = {
  fr: "Zones d'intervention",
  en: 'Areas we cover',
  it: 'Zone di intervento',
};

export const zoneGroups: ZoneGroup[] = [
  {
    name: same('Var'),
    zones: [
      {
        path: '/architecte-interieur-saint-tropez',
        hub: true,
        label: { fr: 'Golfe de Saint-Tropez', en: 'Gulf of Saint-Tropez', it: 'Golfo di Saint-Tropez' },
      },
      { path: '/architecte-interieur-var', hub: true, label: same('Corniche des Maures · Var') },
      { path: '/architecte-interieur-le-lavandou', label: same('Le Lavandou') },
      { path: '/architecte-interieur-bormes-les-mimosas', label: same('Bormes-les-Mimosas') },
      { path: '/architecte-interieur-rayol-canadel', label: same('Rayol-Canadel-sur-Mer') },
      { path: '/architecte-interieur-sainte-maxime', label: same('Sainte-Maxime') },
      { path: '/architecte-interieur-ramatuelle', label: same('Ramatuelle') },
    ],
  },
  {
    name: { fr: 'Alpes-Maritimes', en: 'Alpes-Maritimes', it: 'Alpi Marittime' },
    zones: [
      {
        path: '/architecte-interieur-nice',
        hub: true,
        label: { fr: 'Nice & Villefranche-sur-Mer', en: 'Nice & Villefranche-sur-Mer', it: 'Nizza & Villefranche-sur-Mer' },
      },
      { path: '/architecte-interieur-cannes', label: same('Cannes') },
      { path: '/architecte-interieur-antibes', label: same('Antibes') },
      { path: '/architecte-interieur-mougins', label: same('Mougins') },
      { path: '/architecte-interieur-cap-ferrat', label: same('Cap-Ferrat') },
    ],
  },
];

/** Pages de secteur, dans l'ordre d'affichage du pied de page. */
export const hubZones: ZoneLink[] = zoneGroups.flatMap((group) => group.zones.filter((zone) => zone.hub));
