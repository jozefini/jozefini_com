import { type ClassValue, clsx } from 'clsx'
import type { AnyType } from './types'
import { SITE_TITLE_PATTERN } from './constants'

// ==============================
// Checkers
// ==============================

export const isObject = <T extends Record<string, unknown>>(
  obj: unknown
): obj is T => {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj)
}

export const isArray = <T = unknown[]>(obj: unknown): obj is T[] => {
  return Array.isArray(obj)
}

export const isString = (obj: unknown): obj is string => {
  return typeof obj === 'string'
}

export const isNumber = (obj: unknown): obj is number => {
  return typeof obj === 'number'
}

export const isBoolean = (obj: unknown): obj is boolean => {
  return typeof obj === 'boolean'
}

export const isFunction = <T extends (...args: unknown[]) => unknown>(
  obj: unknown
): obj is T => {
  return typeof obj === 'function'
}

export const isEmpty = (obj: unknown): boolean => {
  if (isArray(obj)) {
    return obj.length === 0
  }

  if (isObject(obj)) {
    return Object.keys(obj).length === 0
  }

  return !obj
}

export const isLikeNumber = (value: unknown): value is number => {
  return !Number.isNaN(Number(value))
}

// ==============================
// Events
// ==============================

type EventElement = MediaQueryList | Element
type EventCallback = (
  el: EventElement,
  event: string,
  handler: EventListener
) => void

export const on: EventCallback = (el, event, handler) => {
  return el?.addEventListener(event, handler)
}

export const off: EventCallback = (el, event, handler) => {
  return el?.removeEventListener(event, handler)
}

export const throttle = <T extends (...args: AnyType[]) => AnyType>(
  func: T,
  limit: number
): T => {
  let lastRun = 0
  let timeoutId: NodeJS.Timeout | null = null

  return function (this: AnyType, ...args: Parameters<T>): void {
    const now = Date.now()
    if (now - lastRun >= limit) {
      lastRun = now
      func.apply(this, args)
    } else if (!timeoutId) {
      timeoutId = setTimeout(
        () => {
          lastRun = Date.now()
          timeoutId = null
          func.apply(this, args)
        },
        limit - (now - lastRun)
      )
    }
  } as T
}

// ==============================
// Formatters
// ==============================

type ExtractKeys<S extends string> =
  S extends `${string}{{${infer K}}}${infer Rest}`
    ? K | ExtractKeys<Rest>
    : never

type ReplacerKeys<S extends string> = ExtractKeys<S> extends infer K
  ? K extends string
    ? Record<K, string | number> & Record<string, string | number>
    : never
  : never

export const strReplacer = <S extends string>(
  value: S,
  mappedReplacer: ReplacerKeys<S>
): string => {
  const prefix = '{{'
  const suffix = '}}'
  const shortcodes = Object.keys(mappedReplacer)

  if (shortcodes.length && value.includes(prefix) && value.includes(suffix)) {
    const pattern = new RegExp(
      `${prefix}(${shortcodes.join('|')})${suffix}`,
      'g'
    )
    return value.replace(pattern, (_, key: keyof typeof mappedReplacer) =>
      String(mappedReplacer[key] ?? '')
    )
  }
  return value
}

export const toNumber = (value: unknown, fallbackValue = 0): number => {
  if (typeof value === 'number') {
    return value
  }
  if (typeof value === 'string') {
    const parsedValue = Number(value)
    return Number.isNaN(parsedValue) ? fallbackValue : parsedValue
  }
  return fallbackValue
}

export const toAbsNumber = (
  value: unknown,
  fallbackValue: number | undefined = 0
): number => {
  return Math.abs(toNumber(value, fallbackValue))
}

export const objectToMap = <T extends Record<string, unknown>>(
  obj: T
): Map<keyof T, T[keyof T]> => {
  return new Map(Object.entries(obj) as [keyof T, T[keyof T]][])
}

// ==============================
// Styles
// ==============================

export type StylesConstant = {
  variants?: Record<string, string>
  sizes?: Record<string, string>
  shape?: Record<string, string>
  defaults?: {
    variant?: keyof StylesConstant['variants'] | string
    size?: keyof StylesConstant['sizes'] | string
    shape?: keyof StylesConstant['shape'] | string
  }
} & {
  [key: string]: string | Record<string, string> | undefined
}

export type StylesVariant<T extends StylesConstant> = {
  variant?: keyof T['variants']
  size?: keyof T['sizes']
  shape?: keyof T['shapes']
}

export const getStyleVariant = <T extends StylesConstant>(
  css: T,
  userChoice: StylesVariant<T>
) => {
  const variantKey = (userChoice.variant ??
    Object.keys(css.variants ?? {})[0]) as keyof (T['variants'] | undefined)
  const sizeKey = (userChoice.size ??
    Object.keys(css.sizes ?? {})[0]) as keyof (T['sizes'] | undefined)
  const shapeKey = (userChoice.shape ??
    Object.keys(css.shapes ?? {})[0]) as keyof (T['shapes'] | undefined)

  return cn(
    css.variants?.[variantKey],
    css.sizes?.[sizeKey],
    css.shapes?.[shapeKey]
  )
}

export const cn = (...inputs: (ClassValue[] | false[])) => {
  return clsx(inputs)
}

export const findTruthy = <T>(...inputs: T[]): T | undefined => {
  return inputs.find(Boolean)
}

// ==============================
// Theme-based
// ==============================

export const getSiteTitle = (title: string) => {
  return strReplacer(SITE_TITLE_PATTERN, { title })
}

// ==============================
// Miscellaneous
// ==============================

export async function fakeRequest<T>(data: T, time = 1000) {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, time)
  })
}
