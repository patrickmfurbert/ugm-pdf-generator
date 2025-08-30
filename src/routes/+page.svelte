<script>
    import { LineItem, Nulook } from "$lib";
    import jsPDF from "jspdf";
    import html2canvas from "html2canvas";

    let items = [
        { name: "Color" },
        { name: "Est. # of Slabs" },
        { name: "Material Price" },
        { name: "Tax" },
        { name: "Total Price" },
        { name: "Sq. Ft Quoted" },
        { name: "Labor Rate" },
        { name: "Total Cost" },
        { name: "Other" },
        { name: "Check Sq. Ft $" },
        { name: "Notes" },
        { name: "Nulook" },
    ];

    async function generatePDF() {
        const element = document.body; // Capture the entire page
        const canvas = await html2canvas(element, {
            scale: 2, // Increase scale for better quality
            useCORS: true, // Handle cross-origin issues
            width: document.documentElement.scrollWidth + 20, // Add padding to ensure full width
            height: document.documentElement.scrollHeight // Ensure full height is captured
        });

        const imgData = canvas.toDataURL("image/png");
        const pdfWidth = canvas.width;
        const pdfHeight = canvas.height;

        console.log("Canvas dimensions:", { width: canvas.width, height: canvas.height });
        console.log("Document dimensions:", { scrollWidth: document.documentElement.scrollWidth, scrollHeight: document.documentElement.scrollHeight });

        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: [pdfWidth, pdfHeight] // Match PDF dimensions to canvas
        });

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("page.pdf");
    }
</script>

<div>
    <div class="center">
        {#each items as item}
            <LineItem itemName={item.name} />
        {/each}
        <div class="right-align">
            <Nulook />
        </div>
    </div>
    <button class="generate-pdf" on:click={generatePDF}>Generate PDF</button>
</div>

<style>
    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative; /* Allow relative positioning */
    }

    .right-align {
        display: flex;
        justify-content: flex-end; /* Right justify the Nulook component */
        width: 100%; /* Ensure it spans the full width */
    }

    .generate-pdf {
        margin-top: 2rem;
        padding: 0.75rem 1.5rem;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .generate-pdf:hover {
        background-color: #0056b3;
    }
</style>
