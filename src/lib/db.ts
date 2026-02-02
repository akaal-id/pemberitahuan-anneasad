// Simple in-memory database (can be replaced with real DB later)
const wishesData: any[] = [];
const rsvpData: any[] = [];

export interface Wish {
  id: number;
  name: string;
  message: string;
  date: string;
}

export interface RsvpData {
  id: number;
  name: string;
  status: "hadir" | "tidak";
  guests: number;
  date: string;
  attended?: boolean;
}

export interface Invitation {
  id: number;
  slug: string;
  guestName: string;
  createdAt: string;
}

function formatDateAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffHours < 1) {
    return "Baru saja";
  } else if (diffHours < 24) {
    return `${diffHours} jam yang lalu`;
  } else if (diffDays <= 7) {
    return `${diffDays} hari yang lalu`;
  } else {
    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  }
}

export const db = {
  wishes: {
    getAll: async () => {
      return wishesData.map((item: any) => ({
        id: item.id,
        name: item.name,
        message: item.message,
        date: formatDateAgo(item.date)
      })) as Wish[];
    },
    add: async (wish: Omit<Wish, 'id' | 'date'>) => {
      const newWish: Wish = {
        id: wishesData.length + 1,
        name: wish.name,
        message: wish.message,
        date: new Date().toISOString()
      };
      wishesData.unshift(newWish);
      return newWish;
    },
    delete: async (id: number) => {
      const index = wishesData.findIndex(w => w.id === id);
      if (index !== -1) {
        wishesData.splice(index, 1);
      }
    },
    update: async (id: number, data: Partial<Wish>) => {
      const index = wishesData.findIndex(w => w.id === id);
      if (index !== -1) {
        wishesData[index] = { ...wishesData[index], ...data };
      }
    }
  },
  rsvp: {
    getAll: async () => {
      return rsvpData.map((item: any) => ({
        id: item.id,
        name: item.name,
        status: item.status,
        guests: item.guests,
        date: item.date,
        attended: item.attended || false
      })) as RsvpData[];
    },
    add: async (data: Omit<RsvpData, 'id' | 'date'>) => {
      const newRsvp: RsvpData = {
        id: rsvpData.length + 1,
        name: data.name,
        status: data.status,
        guests: data.guests,
        date: new Date().toISOString(),
        attended: data.attended || false
      };
      rsvpData.unshift(newRsvp);
      return newRsvp;
    },
    delete: async (id: number) => {
      const index = rsvpData.findIndex(r => r.id === id);
      if (index !== -1) {
        rsvpData.splice(index, 1);
      }
    },
    update: async (id: number, data: Partial<RsvpData>) => {
      const index = rsvpData.findIndex(r => r.id === id);
      if (index !== -1) {
        rsvpData[index] = { ...rsvpData[index], ...data };
      }
    }
  },
  invitations: {
    getAll: async () => [],
    add: async (data: Omit<Invitation, 'id' | 'createdAt'>) => {
      return null;
    },
    delete: async (id: number) => {},
    update: async (id: number, data: Partial<Invitation>) => {},
    getBySlug: async (slug: string) => {
      return null;
    }
  }
};
