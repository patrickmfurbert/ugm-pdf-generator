<script>
    import { LineItem, Nulook } from "$lib";

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
</script>

<div>
    <div class="center">
        {#each items as item}
            <LineItem itemName={item.name} />
        {/each}
        <div class="push-right">
            <Nulook />
        </div>
    </div>
</div>

<style>
    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative; /* Allow relative positioning */
    }

    .push-right {
        margin-left: auto; /* Push the Nulook component to the right */
        margin-right: 20rem;
    }
</style>
