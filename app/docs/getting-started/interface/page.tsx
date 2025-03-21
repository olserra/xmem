import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quick Start | xmem Documentation",
    description: "Get up and running with xmem in minutes.",
};

export default function QuickStartPage() {
    return (
        <div className="space-y-6">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Interface</h1>

            <div className="space-y-4">
                <p className="leading-7">
                    Welcome to the <strong>xmem</strong> Quick Start guide! In this section, we&apos;ll walk you through the
                    basics of getting started with xmem, from creating your first project to adding data, so you can
                    start organizing your knowledge right away.
                </p>

                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Creating Your First Project</h2>
                <p className="leading-7">
                    A project in xmem helps you organize your data and notes. Follow these steps to create your first
                    project:
                </p>
                <ol className="list-decimal list-inside space-y-2">
                    <li>Navigate to the <strong>Projects</strong> page from the main dashboard.</li>
                    <li>Click the <strong>&quot;New Project&quot;</strong> button at the top right of the page.</li>
                    <li>Fill in the project details, including the name and description, to help you identify the project later.</li>
                    <li>Click <strong>Create</strong> to finalize your project. Your new project will now appear on the dashboard.</li>
                </ol>

                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Adding Data</h2>
                <p className="leading-7">
                    Data are the core elements within each project. You can add your thoughts, notes, and insights as data.
                    Once you&apos;ve created a project, follow these steps to add data to it:
                </p>
                <ol className="list-decimal list-inside space-y-2">
                    <li>Go to the <strong>Project</strong> page that you just created.</li>
                    <li>Click the <strong>&quot;Create Memory&quot;</strong> button to open the _data creation form.</li>
                    <li>Enter the content of your _data. This can include notes, ideas, or anything you&apos;d like to capture.</li>
                    <li>Click <strong>Save</strong> to add your _data to the project. Your _data will now be listed under the project&apos;s details.</li>
                </ol>

                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Next Steps</h2>
                <p className="leading-7">
                    Now that you&apos;ve created your first project and added a _data, you&apos;re ready to explore more advanced features.
                    Here are some next steps you can take:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><a href="/docs/_data-management" className="text-blue-500 hover:underline">Learn how to manage your data</a> – Organize, search, and edit your data.</li>
                    <li><a href="/docs/integrations" className="text-blue-500 hover:underline">Integrate xmem with other tools</a> – Connect your knowledge base to external applications for enhanced workflows.</li>
                    <li><a href="/docs/advanced-features" className="text-blue-500 hover:underline">Explore advanced features</a> – Discover advanced options like collaboration and version control.</li>
                </ul>
            </div>
        </div>
    );
}
