import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/react/20/solid';

export const iconsMap = {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
};

export type GameContent = {
    slug: string;
    title: string;
    presentation: {
        title: string;
        subtitle: string;
        image: string;
    };
    recommendedRequirements: {
        downloadUrl: string;
        minimum: {
            os: string;
            processor: string;
            ram: string;
            storage: string;
            gpu: string;
        };
        recommended: {
            os: string;
            processor: string;
            ram: string;
            storage: string;
            gpu: string;
        };
        drivers: {
            name: string;
            logo: string;
            href: string;
        }[];
    };
    video: {
        videoUrl: string;
        thumbnailUrl: string;
    };
    content: {
        image: string;
        tag: string;
        title: string;
        intro: string;
        paragraphs: string[];
        highlights: {
            icon: keyof typeof iconsMap;
            title: string;
            description: string;
        }[];
        outroTitle: string;
        outroText: string;
    };
};