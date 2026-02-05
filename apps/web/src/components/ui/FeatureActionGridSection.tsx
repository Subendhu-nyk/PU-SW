// FeatureActionGridSection.tsx
import React from "react";
import {
    HandHeart,
    Users,
    GraduationCap,
    PiggyBank,
    LucideIcon,
} from "lucide-react";
import { FEATURE_ACTIONS_DATA } from "@/shared/constants/constantData";

const ICON_MAP: Record<string, any> = {
  HandHeart,
  Users,
  GraduationCap,
  PiggyBank,
};


const FeatureActionGridSection = () => {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                    <p className="text-xs tracking-[0.35em] text-slate-400">
                        AWESOME FEATURE
                    </p>
                    <h2 className="mt-4 font-serif text-5xl font-semibold tracking-tight text-slate-900">
                        How Could You Help
                    </h2>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
                    {FEATURE_ACTIONS_DATA.map(({ title, description, icon }) => {
                        const IconComponent = ICON_MAP[icon] ?? HandHeart;

                        return (
                            <div
                                key={title}
                                className="group relative rounded-sm bg-slate-50 px-10 py-10"
                            >
                                <div className="pointer-events-none absolute inset-0 rounded-sm feature-border-anim" />

                                <div className="relative flex items-start gap-5">
                                    {IconComponent && (
                                        <IconComponent
                                            className="mt-1 h-9 w-9 text-emerald-500"
                                            strokeWidth={1.8}
                                        />
                                    )}

                                    <div>
                                        <h3 className="font-serif text-2xl font-semibold text-slate-900">
                                            {title}
                                        </h3>
                                        <p className="mt-4 max-w-[42ch] text-sm leading-6 text-slate-500">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default FeatureActionGridSection;
