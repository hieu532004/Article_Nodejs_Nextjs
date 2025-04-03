// src/addData.ts
interface Article {
    title: string;
    keyword: string;
    description: string;
    content: string;
    date: string;
}

const articles: Article[] = [
    {
        title: "Apple released OS 15 beta",
        keyword: "apple, os",
        description: "Today Apple released OS 15 beta",
        content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to fill a space and show the visual elements of a layout or typeface.",
        date: "2023-10-01",
    },
    {
        title: "Google announces new Pixel 8",
        keyword: "google, pixel",
        description: "Google unveiled its latest smartphone, the Pixel 8",
        content: "The Pixel 8 comes with enhanced camera features and a new Tensor chip. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2023-10-15",
    },
    {
        title: "Microsoft releases Windows 12 preview",
        keyword: "microsoft, windows",
        description: "Microsoft has launched a preview of Windows 12",
        content: "This new version includes a revamped UI and improved performance. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "2023-11-01",
    },
];

async function addArticles(): Promise<void> {
    for (const article of articles) {
        try {
            const response = await fetch('http://localhost:8080/api/v1/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(article),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Article added:', data);
        } catch (error) {
            console.error('Error adding article:', error);
        }
    }
}

addArticles().then(() => console.log('Done adding articles'));