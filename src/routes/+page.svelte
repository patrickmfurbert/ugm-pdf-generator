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
 
        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            hotfixes: ["px_scaling"],
            format: "A2",
            userUnit: 300
        });

        pdf.html(document.body, {
            callback: function (doc) {
                doc.save("page.pdf");
            },
            x: 0,
            y: 0
        });
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
        <button class="generate-pdf" on:click={generatePDF}>Generate PDF</button
        >
    </div>
</div>

<style>
    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative; /* Allow relative positioning */
        margin-left: 30rem;
        margin-right: 30rem;
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
        margin-right: auto;
    }

    .generate-pdf:hover {
        background-color: #0056b3;
    }
</style>
