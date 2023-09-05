import { IBreadcrumbItem, IItem, NavItem } from "./model";

export const navItems: NavItem[] = [
    {
        label: 'All Products',
        href: './products'
    },
    {
        label: 'Categories',
        href: './categories'
    }
]


export const defaultBreadcrumbItems: IBreadcrumbItem[] = [
    {
        name: 'Products',
        link: '/products',
    },
    {
        name: "Categories",
        link: '/categories'
    }
]

export const getSubstring = (text: string, subStringEnd: number): string => {
    return text.length > subStringEnd
        ? `${text.substring(0, subStringEnd)}...`
        : text
}

export const calculateItemsTotal = (items: IItem[]): number => {
    return items
        .map((item) => ({ count: item.count, price: item.price }))
        .reduce(
            (previousValue, currentValue) =>
                previousValue + currentValue.price * currentValue.count,
            0
        )
}

export const formatPrice = (value: number): string => {
    return value.toFixed(2);
  };