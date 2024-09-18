import React from 'react'

import { AppInstance, PageInstance } from './instance'
import { rnNavigationRef } from './router'

export interface Router {
  params: Record<string, unknown>
  path: string
}

interface Current {
  app: AppInstance | null
  router: Router | null
  page: PageInstance | null
  rnNavigationRef: React.RefObject<any>
}

export const Current: Current = {
  app: null,
  router: null,
  page: null,
  rnNavigationRef // RN 导航实例私有对象
}

export const getCurrentInstance = () => Current
