import zonesData from '../data/zones.json'

export interface Zone {
  name: string
  slug: string
  page: string
}

export interface Commune {
  name: string
  slug: string
  page: string
  zones: Zone[]
}

export interface City {
  name: string
  slug: string
  page: string
  communes: Commune[]
}

export interface ZonesData {
  cities: City[]
}

const data = zonesData as ZonesData

export function getCities(): City[] {
  return data.cities
}

export function getCityBySlug(slug: string): City | undefined {
  return data.cities.find((c) => c.slug === slug)
}

export function getCommuneBySlug(citySlug: string, communeSlug: string): Commune | undefined {
  const city = getCityBySlug(citySlug)
  return city?.communes.find((c) => c.slug === communeSlug)
}

export function getAllZones(): (Zone & { cityName: string; citySlug: string; communeName: string; communeSlug: string })[] {
  const zones: (Zone & { cityName: string; citySlug: string; communeName: string; communeSlug: string })[] = []
  for (const city of data.cities) {
    for (const commune of city.communes) {
      for (const zone of commune.zones) {
        zones.push({
          ...zone,
          cityName: city.name,
          citySlug: city.slug,
          communeName: commune.name,
          communeSlug: commune.slug,
        })
      }
    }
  }
  return zones
}

export function getAllCommunes(): (Commune & { cityName: string; citySlug: string })[] {
  const communes: (Commune & { cityName: string; citySlug: string })[] = []
  for (const city of data.cities) {
    for (const commune of city.communes) {
      communes.push({
        ...commune,
        cityName: city.name,
        citySlug: city.slug,
      })
    }
  }
  return communes
}

export function getRelatedZones(currentSlug: string, communeSlug: string, citySlug: string, limit = 6): Zone[] {
  const commune = getCommuneBySlug(citySlug, communeSlug)
  if (!commune) return []
  return commune.zones.filter((z) => z.slug !== currentSlug).slice(0, limit)
}

export function getAllPages(): string[] {
  const pages: string[] = []
  for (const city of data.cities) {
    pages.push(city.page)
    for (const commune of city.communes) {
      pages.push(commune.page)
      for (const zone of commune.zones) {
        pages.push(zone.page)
      }
    }
  }
  return pages
}

export function findZoneByPage(page: string): { zone: Zone; commune: Commune; city: City } | undefined {
  for (const city of data.cities) {
    for (const commune of city.communes) {
      for (const zone of commune.zones) {
        if (zone.page === page) {
          return { zone, commune, city }
        }
      }
    }
  }
  return undefined
}

export function findCommuneByPage(page: string): { commune: Commune; city: City } | undefined {
  for (const city of data.cities) {
    for (const commune of city.communes) {
      if (commune.page === page) {
        return { commune, city }
      }
    }
  }
  return undefined
}

export function findCityByPage(page: string): City | undefined {
  return data.cities.find((c) => c.page === page)
}
