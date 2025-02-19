import { serviceAreas } from "@/lib/constants";
import { Card } from "./ui/card";
import { MapPin, Truck, Home } from "lucide-react";

export function ServiceAreas() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">
            Service Areas
          </h2>
          <p className="mt-4 text-muted-foreground">
            Serving Greater Sudbury and beyond
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Primary Service Area */}
          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Primary Coverage</h3>
            </div>
            <p className="text-muted-foreground mb-4">{serviceAreas.primary.description}</p>
            <p className="font-semibold">{serviceAreas.primary.name}</p>
          </Card>

          {/* Surrounding Regions */}
          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Surrounding Regions</h3>
            </div>
            <p className="text-muted-foreground mb-4">{serviceAreas.surrounding.description}</p>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.surrounding.areas.map((area) => (
                <span key={area} className="px-2 py-1 bg-primary/10 rounded-full text-sm">
                  {area}
                </span>
              ))}
            </div>
          </Card>

          {/* Extended Service Areas */}
          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Extended Coverage</h3>
            </div>
            <p className="text-muted-foreground mb-4">{serviceAreas.extended.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {serviceAreas.extended.areas.map((area) => (
                <span key={area} className="px-2 py-1 bg-primary/10 rounded-full text-sm">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic">{serviceAreas.extended.notes}</p>
          </Card>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-background rounded-lg">
            <h4 className="font-semibold mb-2">Delivery & Setup</h4>
            <p className="text-sm text-muted-foreground">{serviceAreas.options.delivery}</p>
          </div>
          <div className="p-4 bg-background rounded-lg">
            <h4 className="font-semibold mb-2">Self-Pickup Option</h4>
            <p className="text-sm text-muted-foreground">{serviceAreas.options.selfPickup}</p>
          </div>
          <div className="p-4 bg-background rounded-lg">
            <h4 className="font-semibold mb-2">Destination Events</h4>
            <p className="text-sm text-muted-foreground">{serviceAreas.options.destination}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
