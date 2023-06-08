export interface PortfolioArticle {}

export type Tag = {
  id: number
  name: string
}

export interface PortfolioData {
  id: number
  heading: string
  subheading: string
  description: string
  short_description: string
  company_name: string
  company_url: string
  company_logo: string
  company_source_color: number
  date_start: string
  date_end: string
  created_at: string
  tags: Tag[]
  href?: string
}

export type NavItem = {
  name?: string
  icon?: string
  children?: NavItem[]
} & (
  | {
      href: string
      value: string
      children?: never
    }
  | {
      children: NavItem[]
      href?: never
      value?: never
    }
)
