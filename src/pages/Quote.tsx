import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';

interface EventDetails {
  eventType: string;
  eventDate: string;
  location: string;
  guestCount: number;
  additionalNotes: string;
}

const Quote: React.FC = () => {
  const [eventDetails, setEventDetails] = useState<EventDetails>({
    eventType: '',
    eventDate: '',
    location: '',
    guestCount: 0,
    additionalNotes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement quote submission
    console.log('Submitting quote:', eventDetails);
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gold-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl font-display font-bold text-gold-800 mb-4">
            Request a Quote
          </h1>
          <p className="text-lg text-gold-600">
            Tell us about your event and we'll help make it unforgettable
          </p>
        </motion.div>

        {/* Main Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gold-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Event Type */}
              <div>
                <label className="block text-sm font-semibold text-gold-800 mb-2">
                  Event Type
                </label>
                <select
                  value={eventDetails.eventType}
                  onChange={(e) => setEventDetails(prev => ({ ...prev, eventType: e.target.value }))}
                  className="w-full rounded-lg border-gold-200 focus:border-gold-400 focus:ring-gold-400 text-gold-800"
                  required
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="social">Social Gathering</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Event Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date */}
                <div>
                  <label className="block text-sm font-semibold text-gold-800 mb-2">
                    Event Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gold-400" />
                    <Input
                      type="date"
                      value={eventDetails.eventDate}
                      onChange={(e) => setEventDetails(prev => ({ ...prev, eventDate: e.target.value }))}
                      className="pl-12 border-gold-200 focus:border-gold-400 focus:ring-gold-400 text-gold-800"
                      required
                    />
                  </div>
                </div>

                {/* Guest Count */}
                <div>
                  <label className="block text-sm font-semibold text-gold-800 mb-2">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-5 w-5 text-gold-400" />
                    <Input
                      type="number"
                      min="1"
                      value={eventDetails.guestCount || ''}
                      onChange={(e) => setEventDetails(prev => ({ ...prev, guestCount: parseInt(e.target.value) }))}
                      className="pl-12 border-gold-200 focus:border-gold-400 focus:ring-gold-400 text-gold-800"
                      placeholder="Expected number of guests"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-semibold text-gold-800 mb-2">
                  Event Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gold-400" />
                  <Input
                    type="text"
                    value={eventDetails.location}
                    onChange={(e) => setEventDetails(prev => ({ ...prev, location: e.target.value }))}
                    className="pl-12 border-gold-200 focus:border-gold-400 focus:ring-gold-400 text-gold-800"
                    placeholder="Enter the event location"
                    required
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-semibold text-gold-800 mb-2">
                  Additional Notes
                </label>
                <Textarea
                  value={eventDetails.additionalNotes}
                  onChange={(e) => setEventDetails(prev => ({ ...prev, additionalNotes: e.target.value }))}
                  className="border-gold-200 focus:border-gold-400 focus:ring-gold-400 text-gold-800"
                  placeholder="Tell us more about your event, special requirements, or any questions you have..."
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gold-600 hover:bg-gold-700 text-white font-semibold py-4 rounded-lg transition-colors"
              >
                Submit Quote Request
              </Button>
            </form>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center text-gold-600"
          >
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-5 w-5" />
              <p>We'll respond to your quote request within 24 hours</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Quote;
