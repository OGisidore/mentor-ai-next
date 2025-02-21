
import { useChangeLocale, useCurrentLocale } from "@/locales/client"
import { Globe } from "lucide-react"

export const LocalSelect = () => {
    const locale = useCurrentLocale()
    const changeLocale = useChangeLocale()
    return (
        <div className="flex items-center cursor-pointer space-x-2 py-2">
            <Globe className="w-5 h-5" />
            <select onChange={(e)=> changeLocale(e.target.value as "fr" | "en")} value={locale}>
                <option value="en">En</option>
                <option value="fr">Fr</option>
            </select>
        </div>
    )
} 