import { z } from 'zod'

export const monitoringPointGeoJsonSchema = z.object({
  type: z.literal('FeatureCollection'),
  bbox: z.array(z.number()).min(4).max(4),
  features: z.array(
    z.object({
      type: z.literal('Feature'),
      geometry: z.object({
        type: z.literal('Point'),
        coordinates: z.array(z.number()).min(2).max(2),
      }),
      properties: z.object({
        // commune: z.string().optional()
        // date_debut_analyse: z.string().optional()
        // date_fin_analyse: z.string().optional()
        // identifiant_point: z.string()
        // nb_analyses: z.number().optional()
        // nb_analyses_quantifiees: : z.number().optional()
        // nb_pfas_recherches: : z.number().optional()
        // source_application: : z.string().optional()
        type_surveillance: z.string(),
      }),
    })
  ),
})

export type MonitoringPointsGeoJson = z.infer<
  typeof monitoringPointGeoJsonSchema
>

export class MonitoringPointsGeoJsonValidator {
  static validate(data: unknown): MonitoringPointsGeoJson {
    return monitoringPointGeoJsonSchema.parse(data)
  }
}
